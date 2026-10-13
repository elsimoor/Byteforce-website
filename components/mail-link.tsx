import { site } from "@/lib/site";

function encodedEmail() {
  const [user, host] = site.email.split("@");
  return `${user}&#64;${host}`;
}

export function MailLink({ className, label }: { className?: string; label?: string }) {
  const safe = encodedEmail();
  const cls = className ? ` class="${className.replace(/"/g, "")}"` : "";
  const text = label ? label.replace(/[<>"]/g, "") : safe;
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<!--email_off--><a href="mailto:${safe}"${cls}>${text}</a><!--/email_off-->`,
      }}
    />
  );
}

export function EmailText() {
  return <span dangerouslySetInnerHTML={{ __html: `<!--email_off-->${encodedEmail()}<!--/email_off-->` }} />;
}
