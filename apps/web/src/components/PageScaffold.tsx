import type { ReactNode } from "react";

type PageScaffoldProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  toolbar?: ReactNode;
  children: ReactNode;
};

export function PageScaffold({ eyebrow, title, description, toolbar, children }: PageScaffoldProps) {
  return (
    <main className="page-scaffold">
      <div className="page-header">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
        {toolbar ? <div className="page-toolbar">{toolbar}</div> : null}
      </div>
      <div className="page-content">{children}</div>
    </main>
  );
}
