import supabase from '../supabase.js';
import { topicsWithQuestions } from './data/topicsWithQuestions.js';

async function seedTopicsAndQuestions() {
  for (const topic of topicsWithQuestions) {

    // Insert topic to topics-table
    const { data: topicData, error: topicError } = await supabase
      .from('topics')
      .insert({ name: topic.name })
      .select()
      .single();

    if (topicError) {
      console.error(`Failed to insert topic "${topic.name}":`, topicError.message);
      continue;
    }

    // Insert questions for topic to questions-table
    const questions = topic.questions.map((question) => ({
      topic_id: topicData.id,
      question,
    }));

    const { error: questionsError } = await supabase
      .from('questions')
      .insert(questions);

    if (questionsError) {
      console.error(`Failed to insert questions for "${topic.name}":`, questionsError.message);
      continue;
    }

    console.log(`Inserted topic: ${topic.name} with ${questions.length} questions.`);
  }
}

seedTopicsAndQuestions();
