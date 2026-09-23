"""Generate the portfolio resume. Requires reportlab and pypdf."""
from pathlib import Path
from shutil import copyfile
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'output/pdf/Ahmad_Aliyu_Software_Engineer_Resume.pdf'
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
INK = colors.HexColor('#172B3A')
ACCENT = colors.HexColor('#17665F')
MUTED = colors.HexColor('#53616B')
styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=25, leading=29, textColor=INK, spaceAfter=5),
    'title': ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=11.5, leading=16, textColor=ACCENT, spaceAfter=7),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=9, leading=13, textColor=MUTED, spaceAfter=2),
    'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=ACCENT, spaceBefore=14, spaceAfter=7),
    'role': ParagraphStyle('role', fontName='Helvetica-Bold', fontSize=10.2, leading=14, textColor=INK, spaceBefore=7, spaceAfter=2),
    'date': ParagraphStyle('date', fontName='Helvetica', fontSize=9, leading=12, textColor=MUTED, spaceAfter=5),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.5, leading=13.5, textColor=INK, spaceAfter=5, alignment=TA_LEFT),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=9.5, leading=13.5, textColor=INK, leftIndent=10, firstLineIndent=-8, spaceAfter=4),
}
story = []
def para(text, style='body'):
    story.append(Paragraph(text, styles[style]))

def role(company, title, date, bullets):
    items = [Paragraph(f'{company} | {title}', styles['role']), Paragraph(date, styles['date'])]
    items += [Paragraph('- ' + text, styles['bullet']) for text in bullets]
    story.append(KeepTogether(items))

para('AHMAD ALIYU', 'name')
para('SOFTWARE ENGINEER | WEB, MOBILE &amp; BACKEND', 'title')
para('Abuja, Nigeria | Open to remote opportunities | <link href="tel:+2348132943547">+234 813 294 3547</link>', 'contact')
para('<link href="mailto:aliyuahmad1996@gmail.com">aliyuahmad1996@gmail.com</link> | <link href="https://github.com/ahmadaliyu">github.com/ahmadaliyu</link>', 'contact')
para('<link href="https://www.linkedin.com/in/ahmad-aliyu-b13345178">linkedin.com/in/ahmad-aliyu-b13345178</link>', 'contact')

para('PROFESSIONAL SUMMARY', 'section')
para('Software engineer with 8+ years of experience delivering web and mobile applications across fintech, logistics, transportation, food delivery, and agritech. Strongest expertise in React, Next.js, React Native, and TypeScript, complemented by Flutter, backend development, AI integration, system design, and DevOps. Focused on reusable architecture, responsive interfaces, reliable data flows, and maintainable software from development through deployment.')

para('TECHNICAL EXPERTISE', 'section')
for text in [
    '<b>Web &amp; state management:</b> React, Next.js, JavaScript, TypeScript, Redux Toolkit, RTK Query, Context API, HTML, CSS, Tailwind CSS, Styled Components.',
    '<b>Mobile:</b> React Native, Flutter, Expo, Kotlin, SQLite, offline functionality, deep linking, push notifications.',
    '<b>Backend &amp; integrations:</b> NestJS, Laravel, C#, Node.js, REST APIs, GraphQL, Firebase, WebSockets.',
    '<b>System design:</b> Application architecture, reusable components, design systems, state and data flow, API integration, performance optimization.',
    '<b>DevOps &amp; cloud:</b> Docker, CI/CD, GitHub Actions, Codemagic, AWS (S3, EC2, CloudFront), build and deployment automation, Git.',
    '<b>AI &amp; quality:</b> AI integration, AI-assisted development, Jest, React Testing Library, Cypress, Detox, code reviews, mentoring.',
]:
    para(text)

para('PROFESSIONAL EXPERIENCE', 'section')
role('Kredibank', 'Senior Frontend Engineer (React Native)', 'Nov 2024 - Present', [
    'Lead development of React Native features for a digital financial platform, building reusable components with TypeScript and Redux Toolkit.',
    'Integrate secure REST APIs, improve application performance, and collaborate with cross-functional teams to deliver banking and payment experiences.',
    'Mentor developers and contribute to consistent implementation patterns across the application.',
])
role('LoopScribe', 'Senior Frontend Engineer (React / React Native)', 'Jun 2023 - Mar 2025 | Remote', [
    'Developed web and mobile features for a collaborative note-taking product using React, React Native, and TypeScript.',
    'Improved startup and rendering performance, built reusable UI components, and implemented offline functionality.',
    'Contributed to architecture and delivery decisions to keep the product maintainable as features evolved.',
])

story.append(PageBreak())
para('AHMAD ALIYU', 'title')
para('PROFESSIONAL EXPERIENCE - CONTINUED', 'section')
role('WhiteAxis', 'Frontend &amp; Mobile Engineer (Contract)', '2023 - 2024 | Concurrent contract with LoopScribe', [
    'Maintained Partner and Client React Native applications, keeping features and user experience consistent across both products.',
    'Built and maintained the React / Next.js company website, improving responsiveness and load performance.',
    'Worked directly with stakeholders to scope, deliver, and iterate on features independently.',
])
role('NippyEats', 'Frontend Developer', '2022 - 2023 | Abuja, Nigeria', [
    'Built and maintained customer ordering features for a food delivery platform, integrating order tracking, payments, and push notifications.',
    'Collaborated with backend engineers to improve API integration and application performance.',
])
role('Jampay', 'React Native Developer', 'Nov 2022 - May 2023', [
    'Developed cross-platform features with React Native and TypeScript, integrated payment APIs, and improved application performance.',
])
role('EveryFarmer', 'Frontend Engineer', '2018 - Dec 2021', [
    'Built responsive web and mobile applications with React and React Native for an agricultural technology ecosystem.',
    'Integrated mapping services, payment systems, and third-party APIs to support product workflows.',
])

para('SELECTED PROJECT WORK', 'section')
para('<b>Global Cargo Logistics:</b> Developed React, Next.js, and TypeScript dashboards for shipment tracking, bookings, and customer operations. Integrated REST APIs for live updates and built reusable interface components.')
para('<b>Dan Modi Student Care Platform:</b> Next.js, TypeScript, Firebase.<br/><b>Logistics Quote Management Platform:</b> Next.js, Redux Toolkit.<br/><b>Firebase Content Management System:</b> Next.js, Firebase.<br/><b>JAMB CBT Examination Application:</b> React Native.')

para('MENTORING &amp; COMMUNITY', 'section')
para('Teach programming through live coding classes and recorded sessions for aspiring developers. Support teammates through mentoring and shared frontend engineering practices.')

para('EDUCATION', 'section')
para('<b>Bachelor of Engineering, Computer Engineering</b><br/>Ahmadu Bello University, Zaria')

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#D8E2E4'))
    canvas.line(42, 37, A4[0] - 42, 37)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(42, 24, 'Ahmad Aliyu | Software Engineer')
    canvas.drawRightString(A4[0] - 42, 24, f'{doc.page} / 2')
    canvas.restoreState()

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=42, leftMargin=42,
                        topMargin=35, bottomMargin=48, title='Ahmad Aliyu - Software Engineer Resume',
                        author='Ahmad Aliyu')
doc.build(story, onFirstPage=footer, onLaterPages=footer)
reader = PdfReader(OUTPUT)
assert len(reader.pages) == 2, f'Expected 2 pages; found {len(reader.pages)}'
text = '\n'.join(page.extract_text() for page in reader.pages)
for required in ['System design', 'DevOps', 'Docker', 'Laravel', 'NestJS', 'C#', 'Flutter', 'AI', 'Redux', 'CI/CD']:
    assert required in text, f'Missing skill: {required}'
copyfile(OUTPUT, ROOT / 'src/assets/Ahmad_Aliyu_Software_Engineer_Resume.pdf')
print(f'Generated and verified: {OUTPUT} ({len(reader.pages)} pages)')
