import type { ReactNode } from 'react';

export function CollapsibleSection({ id, heading, number, children, subsection = false, className = '' }: {
 id?: string;
 heading: ReactNode;
 number?: string;
 children: ReactNode;
 subsection?: boolean;
 className?: string;
}) {
 const Heading = subsection ? 'h3' : 'h2';
 return <details id={id} open data-collapsible={subsection ? 'subsection' : 'section'} className={`${subsection ? 'paper-subsection' : 'paper-section'} ${className}`}>
  <summary className="section-summary"><div>{number && <span className="section-number">{number}</span>}<Heading>{heading}</Heading></div><span className="collapse-label"><span className="when-open">Collapse</span><span className="when-closed">Expand</span><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.2"/></svg></span></summary>
  <div className="section-body">{children}</div>
 </details>;
}
