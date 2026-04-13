export default function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  required = false,
  maxLength,
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="text-2xl font-medium leading-8 uppercase text-primary pb-2 px-1"
      >
        {label}
        {required && (
          <span className="text-secondary ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`
          border-b
          font-normal
          outline-none
          text-primary
          placeholder:text-muted
          placeholder:text-xs p-1
          placeholder:text-placeholder
          ${error ? "border-secondary" : "border-primary focus:border-primary"}
        `}
      />

      {/* ERROR MESSAGE */}

      <span
        id={`${id}-error`}
        role="alert"
        className="text-xs text-secondary flex items-center gap-1 mt-1 min-h-4"
      >
        {error && (
          <>
            <span aria-hidden="true">!</span>
            {error}
          </>
        )}
      </span>
    </div>
  );
}
