import { getRandomAvailableCard } from '../controllers/cardController.js';
import { markCardUnavailable } from '../db/models/card.js';
import { createGroup } from '../db/models/group.js';
import { insertGroupMember } from '../db/models/groupMembers.js';
import { assignQuestionsToGroup } from '../controllers/groupQuestionsController.js';
import { getGroupMembers } from '../controllers/groupMembersController.js';
import { getQuestionsByGroupId } from '../db/models/groupQuestions.js';

// FLOW FOR GROUP-MATCH
export async function createMatch(userIds) {

  // GET RANDOM AVAILABLE CARD
  const { data: card, error: cardError } = await getRandomAvailableCard();
  if (cardError || !card) return { data: null, error: cardError ?? new Error('No cards available') };

  // CREATE GROUP AND ASSIGN CARD TO GROUP
  const { data: group, error: groupError } = await createGroup(card.id);
  if (groupError || !group) return { data: null, error: groupError };

  // MARK CARD UNAVAILABLE
  await markCardUnavailable(card.id);

  // ADD EACH USER AS A MEMBER OF THE GROUP
  for (const userId of userIds) {
    const { error } = await insertGroupMember(group.id, userId);
    if (error) return { data: null, error };
  }

  // ASSIGN RANDOM QUESTIONS TO GROUP
  const { error: questionsError } = await assignQuestionsToGroup(group.id);
  if (questionsError) return { data: null, error: questionsError };

  // FETCH FULLY POPULATED DATA TO SEND TO CLIENTS
  const { data: members } = await getGroupMembers(group.id);
  const { data: groupQuestionsData } = await getQuestionsByGroupId(group.id);

  const questions =
    groupQuestionsData?.map((q) => ({
      id: q.questions.id,
      question: q.questions.question,
    })) ?? [];

  return {
    data: {
      group: { ...group, members: members ?? [] },
      card: { id: card.id, name: card.name },
      questions,
    },
    error: null,
  };
}
