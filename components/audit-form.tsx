export function AuditForm({
  variant = "editorial",
  initial = "",
}: {
  variant?: "editorial" | "studio";
  initial?: string;
}) {
  if (variant === "studio") {
    return (
      <form action="/audit" className="flex w-full max-w-xl flex-col gap-3 pt-2 sm:flex-row">
        <label className="min-w-0 flex-1">
          <span className="sr-only">Adresse du site à auditer</span>
          <input
            name="url"
            type="text"
            required
            defaultValue={initial}
            placeholder="https://votre-site.ma"
            autoComplete="url"
            autoCapitalize="off"
            spellCheck={false}
            inputMode="url"
            className="h-12 w-full rounded border border-outline-variant/50 bg-surface-container-lowest px-4 text-sm text-on-surface outline-none placeholder:text-outline focus:border-primary"
          />
        </label>
        <button
          type="submit"
          className="inline-flex h-12 shrink-0 items-center justify-center rounded bg-on-surface px-5 text-sm font-medium text-surface transition-colors hover:bg-primary"
        >
          Auditer gratuitement
        </button>
      </form>
    );
  }

  return (
    <form action="/audit" className="mt-12 max-w-xl">
      <label className="grid gap-2 text-sm" htmlFor="audit-url">
        Adresse du site
        <input
          id="audit-url"
          name="url"
          type="text"
          required
          defaultValue={initial}
          placeholder="https://votre-site.ma"
          autoComplete="url"
          autoCapitalize="off"
          spellCheck={false}
          inputMode="url"
          className="field"
        />
      </label>
      <button type="submit" className="mt-6 border-b border-ink pb-1 text-left text-sm">
        Auditer gratuitement
      </button>
    </form>
  );
}
