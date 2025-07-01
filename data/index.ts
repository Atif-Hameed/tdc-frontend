import { HomeIcon, RewardIcon, TribesIcon } from "@/svgs";
import profile from '/public/assets/website/profile.svg'
import profilebag from '/public/assets/website/profilebag.svg'
import reward from '/public/assets/website/reward.svg'
import wave from '/public/assets/website/wave.svg'
import tribe from '/public/assets/website/tribecard.svg'
import mission from '/public/assets/website/mission.svg'
import vission from '/public/assets/website/vision.svg'
import approach from '/public/assets/website/approach.svg'

type InvestmentItem = {
    prefix?: string;
    bold: string;
    suffix?: string;
};



export const SidebarData = [
    { name: 'Home', icon: HomeIcon, src: '/dashboard/home' },
    { name: 'Tribes', icon: TribesIcon, src: '/dashboard/tribes' },
    { name: 'Reward', icon: RewardIcon, src: '/dashboard/reward' },
]

export const WebNavbarData = [
    { name: 'Home', src: '/' },
    { name: 'Tribes', src: '/tribes' },
    { name: 'About Us', src: '/about-us' },
    { name: 'Contact Us', src: '/contact-us' },
]


export const footerSections = [
    {
        title: 'Location',
        content: ['Linden, Johannesburg,', 'South Africa'],
    },
    {
        title: 'Company Detail',
        content: [
            'Trillion Dollar Challenge',
            '(Pty) Ltd Registration',
            'Number 2025/170169/07',
        ],
    },
    {
        title: 'Contact',
        content: [
            'plktro@trillindllc.com',
            'WhatsApp +27 83 440 7087',
        ],
    },
];


export const FeaturedTribes = [
    {
        badge: 1,
        badgeColor: "#FF9697",
        iconSrc: "/assets/images/f1.png",
        title: "Ocean Warriors",
        description: "We are the guardians of the blue. From coral reefs to deep sea trenches, our mission is to protect ocean life.",
        donation: "500,000",
        numColor: '#EAB308'
    },
    {
        badge: 16,
        badgeColor: "#C8F1FF",
        iconSrc: "/assets/images/f2.png",
        title: "Wave Guardians",
        description: "We are the protectors of the seas. From vibrant coral gardens to the mysterious depths.",
        donation: "500,000",
        numColor: '#EBEBEB'
    },
    {
        badge: 8,
        badgeColor: "#C8F1FF",
        iconSrc: "/assets/images/f3.png",
        title: "Climate Innovators",
        description: "We are the protectors of the seas. From vibrant coral gardens to the mysterious depths.",
        donation: "500,000",
        numColor: '#B45309'
    },
    {
        badge: 1,
        badgeColor: "#FF9697",
        iconSrc: "/assets/images/f1.png",
        title: "Ocean Warriors",
        description: "We are the guardians of the blue. From coral reefs to deep sea trenches, our mission is to protect ocean life.",
        donation: "500,000",
        numColor: '#EAB308'
    },
    {
        badge: 16,
        badgeColor: "#C8F1FF",
        iconSrc: "/assets/images/f2.png",
        title: "Wave Guardians",
        description: "We are the protectors of the seas. From vibrant coral gardens to the mysterious depths.",
        donation: "500,000",
        numColor: '#EBEBEB'
    },
    {
        badge: 8,
        badgeColor: "#C8F1FF",
        iconSrc: "/assets/images/f3.png",
        title: "Climate Innovators",
        description: "We are the protectors of the seas. From vibrant coral gardens to the mysterious depths.",
        donation: "500,000",
        numColor: '#B45309'
    },
];


export const transform = [
    {
        number: '10+',
        description: 'Communities helped in the last 15 years.'
    },
    {
        number: '$95 Million',
        description: 'Raised in the past 4 years.'
    },
    {
        number: '150+',
        description: 'Volunteers has joined'
    },
    {
        number: '250+',
        description: 'Has impacted to social'
    },
]


export const challengeData = [
    {
        icon: profile,
        title: 'Create or join a tribe',
        description:
            'Gather your friends, family, or colleagues and form a collective aiming for impact, or join an existing group that shares your passion.',
    },
    {
        icon: wave,
        title: 'Donate $10 (or more) and challenge other tribes',
        description:
            'Make a contribution that fuels your tribe\'s progress, then invite other tribes to match or exceed your generosity, sparking friendly competition.',
    },
    {
        icon: profilebag,
        title: 'Watch your tribe climb the leaderboard',
        description:
            'Track your tribe\'s collective impact in real-time as your donations accumulate and your ranking rises against others, showcasing your commitment.',
    },
    {
        icon: reward,
        title: 'Top tribes earn rewards at milestones, and funds instantly support vetted green organizations',
        description:
            'Achieve recognition and rewards for your tribe\'s success, knowing that all contributions are immediately directed to verified environmental initiatives, making a tangible difference.',
    },
];

export const levelData = [
    {
        level: 'Level 1',
        description: 'Total Reward Pool at Level 1 when',
        content: '$5 million are donated: $2 mill',
    },
    {
        level: 'Level 2',
        description: 'Total Reward Pool at Level 2 when ',
        content: '$50 million are donated: $18 mill',
    },
    {
        level: 'Level 3',
        description: 'Total Reward Pool at Level 3 when',
        content: '$500 mil are donated: $180 million',
    },
    {
        level: 'Level 4',
        description: 'Total Reward Pool at Level 4 when ',
        content: '$5 Bil are donated: $1.8 Bil',
    },
    {
        level: 'Level 5',
        description: 'Total Reward Pool at Level 5 when',
        content: '$50 Bil are donated: $18 Billion',
    },
    {
        level: 'Level 6',
        description: 'Total Reward Pool at Level 6 when ',
        content: '$500 Bil are donated: $180 Billion',
    },
    {
        level: 'Level 7',
        description: 'Total Reward Pool at Level 7 when',
        content: '$1 Trillion are donated: $200 Billon'
    },
];


export const investmentSections: {
    title: string;
    items: InvestmentItem[];
}[] = [
        {
            title: "Early Investment Opportunity",
            items: [
                {
                    prefix: "Available Shares @",
                    bold: "150,000 common shares  $10 per share",
                },
                {
                    prefix: "Total Initial Funding Required",
                    bold: "$1.5 million",
                },
            ],
        },
        {
            title: "Your Return on Investment",
            items: [
                {
                    bold: "15% Equity (Shareholding)",
                    suffix: " in The Trillion Dollar Challenge.",
                },
                {
                    bold: "148% of your initial investment",
                    suffix:
                        " paid back at Level 3 of our overall funding milestones.",
                },
            ],
        }
    ];

export const roiMilestones = {
    title:
        'Guaranteed Returns on Investment (ROI) when the following funding milestones have been reached',
    levels: [
        {
            level: 'Level 4',
            raised: '$5 billion',
            boldReturn: '2398% or 25x your initial investment',
            dividend: '$250',
        },
        {
            level: 'Level 5',
            raised: '$50 billion',
            boldReturn: '20398% or 205x your initial investment',
            dividend: '$2,050',
        },
    ],

};




export const lastTribeData = [
    {
        icon: tribe,
        title: 'Ocean Warriors',
        content: '3 challenges . 255 members',
        buttonTitle: 'Join Tribe'
    },
    {
        icon: tribe,
        title: 'Borneo Defenders',
        content: '3 challenges . 255 members',
        buttonTitle: 'Join Tribe'
    },
    {
        icon: tribe,
        title: 'Desert Guardians',
        content: '2 challenges . 250 members',
        buttonTitle: 'Join Tribe'
    },
    {
        icon: tribe,
        title: 'Mountain Protectors',
        content: '4 challenges . 300 members',
        buttonTitle: 'Join Tribe'
    },
];

export const principleData = [
    {
        title: 'Our Mission',
        icon: mission,
        description: 'We aim to collect a trillion dollars to support vetted green organizations. By engaging tribes, we create a collective effort to make the planet healthier.'
    },
    {
        title: 'Our Vision',
        icon: vission,
        description: 'Our vision is a sustainable world where tribes unite for environmental protection, fostering collaboration to fund impactful green projects.'
    },
    {
        title: 'Our Approach',
        icon: approach,
        description: 'We challenge tribes to contribute, providing a rewards system for those who raise the most funds, creating a competitive spirit for environmental good.'
    },
]