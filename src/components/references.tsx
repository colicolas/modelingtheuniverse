const references = [
 {id:'epicurus', text:<>Epicurus. (n.d.). <cite>Letter to Menoeceus</cite> (R. D. Hicks, Trans.). The Internet Classics Archive.</>, url:'https://classics.mit.edu/Epicurus/menoec.html'},
 {id:'horace-1',text:<>Horace. (n.d.). <cite>Satire 1.1</cite> (A. S. Kline, Trans.; J. Lynch, Ed.). Jack Lynch.</>,url:'https://jacklynch.net/Texts/horacesatire11.html'},
 {id:'horace-4',text:<>Horace. (n.d.). <cite>Satires, Book I: Satire IV</cite> (A. S. Kline, Trans.). Poetry in Translation.</>,url:'https://www.poetryintranslation.com/PITBR/Latin/HoraceSatiresBkISatIV.php'},
 {id:'iasp',text:<>International Association for the Study of Pain. (2020, July 16). <cite>IASP announces revised definition of pain.</cite></>,url:'https://www.iasp-pain.org/publications/iasp-news/iasp-announces-revised-definition-of-pain/'},
 {id:'krug',text:<>Krug, E. G., Dahlberg, L. L., Mercy, J. A., Zwi, A. B., &amp; Lozano, R. (Eds.). (2002). <cite>World report on violence and health.</cite> World Health Organization.</>,url:'https://www.who.int/publications/i/item/9241545615'},
 {id:'odoherty',text:<>O’Doherty, J. P. (2011). Reward predictions and computations. In J. A. Gottfried (Ed.), <cite>Neurobiology of sensation and reward</cite> (Chapter 14). CRC Press.</>,url:'https://www.ncbi.nlm.nih.gov/books/NBK92783/'},
 {id:'purves',text:<>Purves, D., Augustine, G. J., Fitzpatrick, D., Katz, L. C., LaMantia, A.-S., McNamara, J. O., &amp; Williams, S. M. (Eds.). (2001). <cite>Neuroscience</cite> (2nd ed.). Sinauer Associates.</>,url:'https://www.ncbi.nlm.nih.gov/books/NBK10799/'},
 {id:'scarry',text:<>Scarry, E. (1985). <cite>The body in pain: The making and unmaking of the world.</cite> Oxford University Press.</>,url:'https://iberian-connections.yale.edu/wp-content/uploads/2023/02/Scarry-The-Body-in-Pain-excerpt-1985.pdf'},
 {id:'spielman',text:<>Spielman, R. M., Jenkins, W. J., &amp; Lovett, M. D. (2020). <cite>Psychology 2e.</cite> OpenStax.</>,url:'https://openstax.org/details/books/psychology-2e'},
];
export function References({only}:{only?:string[]}){return <ul className="apa-references">{references.filter(r=>!only||only.includes(r.id)).map(r=><li id={`ref-${r.id}`} key={r.id}>{r.text} <a href={r.url}>{r.url}</a></li>)}</ul>}
