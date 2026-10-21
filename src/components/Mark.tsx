export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 96"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <rect x="8" y="14" width="58" height="16" rx="8" />
      <rect x="8" y="43" width="38" height="16" rx="8" />
      <rect x="8" y="72" width="24" height="16" rx="8" />
      <circle cx="82" cy="80" r="12" />
    </svg>
  );
}
