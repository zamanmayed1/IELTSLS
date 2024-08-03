import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const SkillDirectory = () => {
  let skills = [
    {
      category: "Personal Development",
      skills: [
        {
          title: "Time Management",
          subtitle: "Master the art of managing your time effectively.",
          useful_apps: ["Google Calendar", "Trello"],
          useful_websites: [
            "https://calendar.google.com",
            "https://trello.com",
          ],
          description:
            "Use calendar and task management tools to plan and prioritize tasks.",
        },
        {
          title: "Note-Taking",
          subtitle: "Efficiently capture and organize your thoughts and ideas.",
          useful_apps: ["Evernote", "Notion"],
          useful_websites: ["https://evernote.com", "https://notion.so"],
          description:
            "Use digital note-taking apps to keep your notes organized and accessible.",
        },
        {
          title: "Speed Reading",
          subtitle: "Improve your reading speed and comprehension.",
          useful_apps: ["Spreeder"],
          useful_websites: ["https://www.spreeder.com"],
          description:
            "Practice daily to gradually increase your reading speed.",
        },
        {
          title: "Effective Communication",
          subtitle:
            "Enhance your communication skills for professional and personal interactions.",
          useful_apps: ["Slack", "Microsoft Teams"],
          useful_websites: ["https://slack.com", "https://teams.microsoft.com"],
          description:
            "Learn to use communication tools to collaborate effectively with others.",
        },
        {
          title: "Mindfulness",
          subtitle: "Practice mindfulness to improve mental clarity and focus.",
          useful_apps: ["Headspace"],
          useful_websites: ["https://www.headspace.com"],
          description:
            "Incorporate mindfulness exercises into your daily routine.",
        },
        {
          title: "Goal Setting",
          subtitle: "Set and achieve your goals using proven frameworks.",
          useful_apps: ["Todoist", "GoalsOnTrack"],
          useful_websites: ["https://todoist.com", "https://goalsontrack.com"],
          description:
            "Utilize the SMART goals framework for effective goal setting.",
        },
        {
          title: "Public Speaking",
          subtitle: "Improve your public speaking skills.",
          useful_apps: ["Orai", "Speeko"],
          useful_websites: ["https://www.orai.com", "https://www.speeko.co"],
          description:
            "Practice public speaking and receive feedback using these apps.",
        },
        {
          title: "Critical Thinking",
          subtitle: "Enhance your critical thinking abilities.",
          useful_apps: ["Lumosity", "Elevate"],
          useful_websites: [
            "https://www.lumosity.com",
            "https://www.elevateapp.com",
          ],
          description:
            "Engage in brain-training games to boost critical thinking.",
        },
        {
          title: "Problem-Solving",
          subtitle: "Develop effective problem-solving skills.",
          useful_apps: ["Brainly", "Brilliant"],
          useful_websites: [
            "https://www.brainly.com",
            "https://www.brilliant.org",
          ],
          description:
            "Apply techniques like the 5 Whys to improve problem-solving.",
        },
        {
          title: "Networking",
          subtitle: "Build and maintain professional relationships.",
          useful_apps: ["LinkedIn", "Shapr"],
          useful_websites: ["https://www.linkedin.com", "https://www.shapr.co"],
          description:
            "Use professional networking platforms to connect with others.",
        },
      ],
    },
    {
      category: "Productivity Tools",
      skills: [
        {
          title: "Keyboard Shortcuts",
          subtitle: "Increase efficiency with keyboard shortcuts.",
          useful_apps: ["CheatSheet", "KeyRocket"],
          useful_websites: [
            "https://www.mediaatelier.com/CheatSheet",
            "https://www.keyrocket.com",
          ],
          description: "Learn and master shortcuts for Windows and macOS.",
        },
        {
          title: "Task Automation",
          subtitle: "Automate repetitive tasks to save time.",
          useful_apps: ["IFTTT", "Zapier"],
          useful_websites: ["https://ifttt.com", "https://zapier.com"],
          description: "Use automation tools to streamline workflows.",
        },
        {
          title: "Cloud Storage",
          subtitle: "Store and access your files securely in the cloud.",
          useful_apps: ["Google Drive", "Dropbox"],
          useful_websites: [
            "https://drive.google.com",
            "https://www.dropbox.com",
          ],
          description: "Learn to use cloud storage services effectively.",
        },
        {
          title: "Email Management",
          subtitle: "Keep your inbox organized and under control.",
          useful_apps: ["Inbox Zero", "Boomerang"],
          useful_websites: [
            "https://www.inboxzero.com",
            "https://www.boomeranggmail.com",
          ],
          description:
            "Master email management techniques to maintain productivity.",
        },
        {
          title: "Virtual Meetings",
          subtitle: "Conduct effective virtual meetings.",
          useful_apps: ["Zoom", "Microsoft Teams"],
          useful_websites: ["https://zoom.us", "https://teams.microsoft.com"],
          description: "Use virtual meeting tools to collaborate remotely.",
        },
        {
          title: "Document Collaboration",
          subtitle: "Work collaboratively on documents in real-time.",
          useful_apps: ["Google Docs", "Microsoft Office 365"],
          useful_websites: [
            "https://docs.google.com",
            "https://www.office.com",
          ],
          description:
            "Leverage online tools for seamless document collaboration.",
        },
        {
          title: "Digital Organization",
          subtitle: "Keep your digital life organized.",
          useful_apps: ["OneNote", "Evernote"],
          useful_websites: ["https://www.onenote.com", "https://evernote.com"],
          description: "Organize notes, files, and tasks digitally.",
        },
        {
          title: "PDF Tools",
          subtitle: "Manage and edit PDFs efficiently.",
          useful_apps: ["Adobe Acrobat", "Smallpdf"],
          useful_websites: [
            "https://acrobat.adobe.com",
            "https://www.smallpdf.com",
          ],
          description: "Use PDF tools to edit, merge, and convert PDF files.",
        },
        {
          title: "Screen Recording",
          subtitle: "Capture your screen for tutorials and presentations.",
          useful_apps: ["Loom", "OBS Studio"],
          useful_websites: ["https://www.loom.com", "https://obsproject.com"],
          description:
            "Record and share your screen with screen recording software.",
        },
        {
          title: "Data Backup",
          subtitle: "Ensure your data is backed up securely.",
          useful_apps: ["Backblaze", "Carbonite"],
          useful_websites: [
            "https://www.backblaze.com",
            "https://www.carbonite.com",
          ],
          description: "Implement automatic backups to protect your data.",
        },
      ],
    },
    {
      category: "Digital Literacy",
      skills: [
        {
          title: "Online Research",
          subtitle: "Conduct effective online research.",
          useful_apps: ["Google Scholar", "Zotero"],
          useful_websites: [
            "https://scholar.google.com",
            "https://www.zotero.org",
          ],
          description: "Master search operators and research tools.",
        },
        {
          title: "Digital Security",
          subtitle: "Protect your digital life with strong security practices.",
          useful_apps: ["LastPass", "1Password"],
          useful_websites: [
            "https://www.lastpass.com",
            "https://1password.com",
          ],
          description: "Use password managers to keep your passwords secure.",
        },
        {
          title: "Internet Safety",
          subtitle: "Stay safe online by recognizing threats.",
          useful_apps: ["Norton Security", "McAfee"],
          useful_websites: ["https://us.norton.com", "https://www.mcafee.com"],
          description: "Identify and avoid phishing and scam emails.",
        },
        {
          title: "Data Privacy",
          subtitle: "Manage and protect your personal data online.",
          useful_apps: ["Privacy Badger", "DuckDuckGo"],
          useful_websites: [
            "https://privacybadger.org",
            "https://duckduckgo.com",
          ],
          description: "Understand and control your online privacy settings.",
        },
        {
          title: "Cloud Computing",
          subtitle: "Understand the basics of cloud computing.",
          useful_apps: ["AWS", "Google Cloud"],
          useful_websites: [
            "https://aws.amazon.com",
            "https://cloud.google.com",
          ],
          description: "Familiarize yourself with cloud computing services.",
        },
        {
          title: "VPN Usage",
          subtitle: "Browse the internet securely with VPNs.",
          useful_apps: ["NordVPN", "ExpressVPN"],
          useful_websites: [
            "https://nordvpn.com",
            "https://www.expressvpn.com",
          ],
          description: "Use VPNs to secure your internet connection.",
        },
        {
          title: "SEO Basics",
          subtitle: "Improve your website's visibility with SEO.",
          useful_apps: ["Yoast SEO", "Moz"],
          useful_websites: ["https://yoast.com", "https://moz.com"],
          description: "Learn the basics of search engine optimization.",
        },
        {
          title: "HTML/CSS",
          subtitle: "Understand the basics of web design with HTML and CSS.",
          useful_apps: ["Brackets", "Sublime Text"],
          useful_websites: [
            "https://brackets.io",
            "https://www.sublimetext.com",
          ],
          description: "Start designing websites with HTML and CSS.",
        },
        {
          title: "Digital Marketing",
          subtitle: "Learn the fundamentals of digital marketing.",
          useful_apps: ["HubSpot", "Hootsuite"],
          useful_websites: ["https://www.hubspot.com", "https://hootsuite.com"],
          description:
            "Use digital marketing tools to promote products and services.",
        },
        {
          title: "Coding Basics",
          subtitle: "Learn the basics of coding.",
          useful_apps: ["Codecademy", "freeCodeCamp"],
          useful_websites: [
            "https://www.codecademy.com",
            "https://www.freecodecamp.org",
          ],
          description:
            "Start learning coding languages like Python and JavaScript.",
        },
      ],
    },
    {
      category: "Creative Skills",
      skills: [
        {
          title: "Graphic Design",
          subtitle: "Create stunning visuals with graphic design tools.",
          useful_apps: ["Adobe Photoshop", "Canva"],
          useful_websites: [
            "https://www.adobe.com/products/photoshop.html",
            "https://www.canva.com",
          ],
          description:
            "Learn to use graphic design software for visual content creation.",
        },
        {
          title: "Video Editing",
          subtitle: "Edit and produce high-quality videos.",
          useful_apps: ["Adobe Premiere Pro", "Final Cut Pro"],
          useful_websites: [
            "https://www.adobe.com/products/premiere.html",
            "https://www.apple.com/final-cut-pro",
          ],
          description: "Use video editing tools to create professional videos.",
        },
        {
          title: "Photography",
          subtitle: "Capture and edit stunning photographs.",
          useful_apps: ["Adobe Lightroom", "VSCO"],
          useful_websites: [
            "https://www.adobe.com/products/photoshop-lightroom.html",
            "https://vsco.co",
          ],
          description: "Learn photography techniques and photo editing.",
        },
        {
          title: "Web Design",
          subtitle: "Design beautiful and functional websites.",
          useful_apps: ["Sketch", "Figma"],
          useful_websites: ["https://www.sketch.com", "https://www.figma.com"],
          description: "Use web design tools to create user-friendly websites.",
        },
        {
          title: "Content Creation",
          subtitle: "Produce engaging content for various platforms.",
          useful_apps: ["Buffer", "BuzzSumo"],
          useful_websites: ["https://buffer.com", "https://buzzsumo.com"],
          description:
            "Plan and create content that resonates with your audience.",
        },
        {
          title: "Animation",
          subtitle: "Create animated content for videos and presentations.",
          useful_apps: ["Blender", "Toon Boom Harmony"],
          useful_websites: [
            "https://www.blender.org",
            "https://www.toonboom.com/products/harmony",
          ],
          description:
            "Learn animation techniques and tools for dynamic content.",
        },
        {
          title: "UX Design",
          subtitle: "Design user experiences that are intuitive and effective.",
          useful_apps: ["Adobe XD", "Axure"],
          useful_websites: [
            "https://www.adobe.com/products/xd.html",
            "https://www.axure.com",
          ],
          description:
            "Use UX design tools to create user-friendly interfaces.",
        },
        {
          title: "Music Production",
          subtitle: "Create and produce music tracks.",
          useful_apps: ["Ableton Live", "FL Studio"],
          useful_websites: [
            "https://www.ableton.com",
            "https://www.image-line.com",
          ],
          description:
            "Learn music production techniques with industry-standard tools.",
        },
        {
          title: "Creative Writing",
          subtitle: "Develop your creative writing skills.",
          useful_apps: ["Scrivener", "Grammarly"],
          useful_websites: [
            "https://www.literatureandlatte.com/scrivener/overview",
            "https://www.grammarly.com",
          ],
          description:
            "Enhance your writing with tools for authors and writers.",
        },
        {
          title: "3D Modeling",
          subtitle: "Create 3D models for various applications.",
          useful_apps: ["AutoCAD", "Maya"],
          useful_websites: [
            "https://www.autodesk.com/products/autocad/overview",
            "https://www.autodesk.com/products/maya/overview",
          ],
          description:
            "Learn 3D modeling techniques with professional software.",
        },
      ],
    },
    {
      category: "Professional Skills",
      skills: [
        {
          title: "Project Management",
          subtitle: "Manage projects efficiently from start to finish.",
          useful_apps: ["Asana", "Jira"],
          useful_websites: [
            "https://asana.com",
            "https://www.atlassian.com/software/jira",
          ],
          description:
            "Use project management tools to keep projects on track.",
        },
        {
          title: "Data Analysis",
          subtitle: "Analyze and interpret data effectively.",
          useful_apps: ["Tableau", "Excel"],
          useful_websites: [
            "https://www.tableau.com",
            "https://www.microsoft.com/en-us/microsoft-365/excel",
          ],
          description: "Use data analysis tools to derive insights from data.",
        },
        {
          title: "Financial Literacy",
          subtitle: "Understand and manage your finances effectively.",
          useful_apps: ["Mint", "YNAB"],
          useful_websites: [
            "https://www.mint.com",
            "https://www.youneedabudget.com",
          ],
          description:
            "Use financial management tools to track and plan your finances.",
        },
        {
          title: "Negotiation",
          subtitle: "Develop strong negotiation skills.",
          useful_apps: ["Negotiation 360", "Skillshare"],
          useful_websites: [
            "https://www.negotiation360.com",
            "https://www.skillshare.com",
          ],
          description:
            "Learn negotiation techniques to achieve better outcomes.",
        },
        {
          title: "Leadership",
          subtitle: "Enhance your leadership skills.",
          useful_apps: ["Coursera", "LinkedIn Learning"],
          useful_websites: [
            "https://www.coursera.org",
            "https://www.linkedin.com/learning",
          ],
          description:
            "Take leadership courses to develop effective leadership qualities.",
        },
        {
          title: "Public Relations",
          subtitle: "Manage your public image and media relations.",
          useful_apps: ["Cision", "Hootsuite"],
          useful_websites: ["https://www.cision.com", "https://hootsuite.com"],
          description: "Use PR tools to manage and monitor media coverage.",
        },
        {
          title: "HR Management",
          subtitle: "Effectively manage human resources.",
          useful_apps: ["BambooHR", "Workday"],
          useful_websites: [
            "https://www.bamboohr.com",
            "https://www.workday.com",
          ],
          description:
            "Use HR management tools for efficient workforce management.",
        },
        {
          title: "Customer Service",
          subtitle: "Deliver exceptional customer service.",
          useful_apps: ["Zendesk", "Freshdesk"],
          useful_websites: ["https://www.zendesk.com", "https://freshdesk.com"],
          description:
            "Use customer service platforms to support and engage customers.",
        },
        {
          title: "Sales Techniques",
          subtitle: "Master effective sales techniques.",
          useful_apps: ["Salesforce", "HubSpot CRM"],
          useful_websites: [
            "https://www.salesforce.com",
            "https://www.hubspot.com/products/crm",
          ],
          description:
            "Use sales tools to improve sales performance and management.",
        },
        {
          title: "Marketing Strategies",
          subtitle: "Develop and implement effective marketing strategies.",
          useful_apps: ["Google Analytics", "Marketo"],
          useful_websites: [
            "https://analytics.google.com",
            "https://www.marketo.com",
          ],
          description:
            "Use marketing tools to plan and execute marketing campaigns.",
        },
      ],
    },
  ];

  const [completedChallenges, setCompletedChallenges] = useState(() => {
    const storedCompletedChallenges = localStorage.getItem('completedChallenges');
    return storedCompletedChallenges ? JSON.parse(storedCompletedChallenges) : {};
  });

  useEffect(() => {
    localStorage.setItem('completedChallenges', JSON.stringify(completedChallenges));
  }, [completedChallenges]);

  const handleCompleteChallenge = (categoryIndex, skillIndex) => {
    setCompletedChallenges(prevState => {
      const updatedState = {
        ...prevState,
        [categoryIndex]: {
          ...prevState[categoryIndex],
          [skillIndex]: !prevState[categoryIndex]?.[skillIndex],
        },
      };
      localStorage.setItem('completedChallenges', JSON.stringify(updatedState));
      return updatedState;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Skill Directory - Daily Learn Challenge!</title>
      </Helmet>
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-6 ">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`p-4 border  transition-transform duration-300 ${
                      completedChallenges[categoryIndex]?.[skillIndex]
                        ? 'bg-green-100 border-green-500'
                        : 'bg-gray-50'
                    }`}
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{skill.subtitle}</p>
                    <div className="mb-2">
                      <span className="font-bold text-gray-700">Useful Apps: </span>
                      {skill.useful_apps.join(', ')}
                    </div>
                    
                    <p className="text-gray-700 mb-4">{skill.description}</p>
                    <button
                      className={`py-2 px-4 rounded-full font-bold transition-colors duration-300 ${
                        completedChallenges[categoryIndex]?.[skillIndex]
                          ? 'bg-green-500 text-white'
                          : 'bg-blue-500 text-white hover:bg-blue-700'
                      }`}
                      onClick={() => handleCompleteChallenge(categoryIndex, skillIndex)}
                    >
                      {completedChallenges[categoryIndex]?.[skillIndex]
                        ? 'Challenge Completed'
                        : 'Complete Challenge'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillDirectory;
