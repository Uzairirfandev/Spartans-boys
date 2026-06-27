// Central data store for Spartans Boys website
// This file will be used by both the dashboard and website components

// Helper functions for localStorage
const getStorageData = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
      console.error(`Error reading ${key} from localStorage:`, error);
      return defaultValue;
    }
  }
  return defaultValue;
};

const setStorageData = (key, data) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error writing ${key} to localStorage:`, error);
    }
  }
};

// Initial data
// Roster only — stats start at 0 and fill up from real "Add Score" entries.
const initialTeamMembers = [
  { id: 1, name: "Barry", role: "Batsman", number: "96", image: "/images/barry.jpeg", country: "", age: 0, matches: 0, runs: 0, wickets: 0 },
  { id: 2, name: "Batsman", role: "Batsman", number: "10", image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp", country: "", age: 0, matches: 0, runs: 0, wickets: 0 },
  { id: 3, name: "Berry", role: "Bat/Spin", number: "11", image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp", country: "", age: 0, matches: 0, runs: 0, wickets: 0 },
  { id: 4, name: "Hammad", role: "Batsman", number: "9", image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp", country: "", age: 0, matches: 0, runs: 0, wickets: 0 },
  { id: 5, name: "Uzair", role: "Allrounder", number: "17", image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp", country: "", age: 0, matches: 0, runs: 0, wickets: 0 },
  { id: 6, name: "Ali", role: "Bowler", number: "21", image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp", country: "", age: 0, matches: 0, runs: 0, wickets: 0 },
];

const initialVideos = [
  { 
    id: 1, 
    slug: "cricket-journey",
    title: "My Journey to Professional Cricket", 
    excerpt: "From street cricket in Karachi to international stadiums – the real story behind the grind, failures, and breakthroughs that shaped my cricket career.",
    date: "Jan 15, 2026", 
    readTime: "8 min read",
    category: "Career",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: 1250,
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: 2, 
    slug: "cricket-training-secrets",
    title: "Training Secrets That Changed My Cricket Game", 
    excerpt: "The daily routines, batting drills, and bowling techniques that helped me go from good to elite level performance in cricket.",
    date: "Dec 28, 2025", 
    readTime: "6 min read",
    category: "Training",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: 890,
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    slug: "cricket-nutrition",
    title: "Cricket Nutrition: Fueling Peak Performance",
    excerpt: "What I eat before a match, during breaks, and in recovery — the simple diet habits that keep energy and focus high through long days on the field.",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    category: "Nutrition",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: 640,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
];

const initialGrounds = [
  {
    id: 1,
    title: "Paragon Stadium",
    location: "Karachi, Pakistan",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    capacity: "25,000",
    established: "2010",
    stats: {
      mostRuns: { name: "", runs: 0, matches: 0 },
      mostWickets: { name: "", wickets: 0, matches: 0 },
      manOfTheMatch: { name: "", awards: 0 }
    }
  },
  {
    id: 2,
    title: "Ashiayan Stadium",
    location: "Lahore, Pakistan",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    capacity: "20,000",
    established: "2012",
    stats: {
      mostRuns: { name: "", runs: 0, matches: 0 },
      mostWickets: { name: "", wickets: 0, matches: 0 },
      manOfTheMatch: { name: "", awards: 0 }
    }
  },
];

const initialSkills = [
  { id: 1, name: "Total Runs", value: 0, suffix: "", color: "red" },
  { id: 2, name: "Total Wickets", value: 0, suffix: "", color: "blue" },
  { id: 3, name: "Matches Played", value: 0, suffix: "", color: "green" },
  { id: 4, name: "Career Average", value: 0, suffix: "", color: "purple" },
  { id: 5, name: "Best Score", value: 0, suffix: "", color: "yellow" },
  { id: 6, name: "Strike Rate", value: 0, suffix: "", color: "orange" },
];

// Data management functions
export const dataManager = {
  // Team Members
  getTeamMembers: () => getStorageData('teamMembers', initialTeamMembers),
  
  addTeamMember: (member) => {
    const currentMembers = getStorageData('teamMembers', initialTeamMembers);
    const newMember = {
      id: Date.now(),
      image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp", // Default image
      ...member,
      age: parseInt(member.age),
      matches: parseInt(member.matches),
      runs: parseInt(member.runs),
      wickets: parseInt(member.wickets)
    };
    const updatedMembers = [...currentMembers, newMember];
    setStorageData('teamMembers', updatedMembers);
    return newMember;
  },
  
  updateTeamMember: (id, updates) => {
    const currentMembers = getStorageData('teamMembers', initialTeamMembers);
    const index = currentMembers.findIndex(m => m.id === id);
    if (index !== -1) {
      currentMembers[index] = { ...currentMembers[index], ...updates };
      setStorageData('teamMembers', currentMembers);
      return currentMembers[index];
    }
    return null;
  },
  
  deleteTeamMember: (id) => {
    const currentMembers = getStorageData('teamMembers', initialTeamMembers);
    const updatedMembers = currentMembers.filter(member => member.id !== id);
    setStorageData('teamMembers', updatedMembers);
    return true;
  },
  
  // Videos
  getVideos: () => getStorageData('videos', initialVideos),
  
  addVideo: (video) => {
    const currentVideos = getStorageData('videos', initialVideos);
    const newVideo = {
      id: Date.now(),
      slug: video.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      excerpt: video.excerpt || "Exciting cricket content from Spartans Boys team.",
      readTime: video.readTime || "5 min read",
      image: video.image || "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      views: 0,
      ...video
    };
    const updatedVideos = [...currentVideos, newVideo];
    setStorageData('videos', updatedVideos);
    return newVideo;
  },
  
  updateVideo: (id, updates) => {
    const currentVideos = getStorageData('videos', initialVideos);
    const index = currentVideos.findIndex(v => v.id === id);
    if (index !== -1) {
      currentVideos[index] = { ...currentVideos[index], ...updates };
      setStorageData('videos', currentVideos);
      return currentVideos[index];
    }
    return null;
  },
  
  deleteVideo: (id) => {
    const currentVideos = getStorageData('videos', initialVideos);
    const updatedVideos = currentVideos.filter(video => video.id !== id);
    setStorageData('videos', updatedVideos);
    return true;
  },
  
  // Grounds
  getGrounds: () => getStorageData('grounds', initialGrounds),
  
  addGround: (ground) => {
    const currentGrounds = getStorageData('grounds', initialGrounds);
    const newGround = {
      id: Date.now(),
      image: ground.image || "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: {
        mostRuns: {
          name: "Player Name",
          runs: 1000,
          matches: 10
        },
        mostWickets: {
          name: "Player Name",
          wickets: 20,
          matches: 10
        },
        manOfTheMatch: {
          name: "Player Name",
          awards: 3
        }
      },
      ...ground
    };
    const updatedGrounds = [...currentGrounds, newGround];
    setStorageData('grounds', updatedGrounds);
    return newGround;
  },
  
  updateGround: (id, updates) => {
    const currentGrounds = getStorageData('grounds', initialGrounds);
    const index = currentGrounds.findIndex(g => g.id === id);
    if (index !== -1) {
      currentGrounds[index] = { ...currentGrounds[index], ...updates };
      setStorageData('grounds', currentGrounds);
      return currentGrounds[index];
    }
    return null;
  },
  
  deleteGround: (id) => {
    const currentGrounds = getStorageData('grounds', initialGrounds);
    const updatedGrounds = currentGrounds.filter(ground => ground.id !== id);
    setStorageData('grounds', updatedGrounds);
    return true;
  },
  
  // Skills
  getSkills: () => getStorageData('skills', initialSkills),
  
  addSkill: (skill) => {
    const currentSkills = getStorageData('skills', initialSkills);
    const newSkill = {
      id: Date.now(),
      ...skill,
      value: parseFloat(skill.value)
    };
    const updatedSkills = [...currentSkills, newSkill];
    setStorageData('skills', updatedSkills);
    return newSkill;
  },
  
  updateSkill: (id, updates) => {
    const currentSkills = getStorageData('skills', initialSkills);
    const index = currentSkills.findIndex(s => s.id === id);
    if (index !== -1) {
      currentSkills[index] = { ...currentSkills[index], ...updates };
      setStorageData('skills', currentSkills);
      return currentSkills[index];
    }
    return null;
  },
  
  deleteSkill: (id) => {
    const currentSkills = getStorageData('skills', initialSkills);
    const updatedSkills = currentSkills.filter(skill => skill.id !== id);
    setStorageData('skills', updatedSkills);
    return true;
  },
  
  // Get specific item by ID
  getTeamMemberById: (id) => {
    const currentMembers = getStorageData('teamMembers', initialTeamMembers);
    return currentMembers.find(m => m.id === id);
  },
  getVideoById: (id) => {
    const currentVideos = getStorageData('videos', initialVideos);
    return currentVideos.find(v => v.id === id);
  },
  getVideoBySlug: (slug) => {
    const currentVideos = getStorageData('videos', initialVideos);
    return currentVideos.find(v => v.slug === slug);
  },
  getGroundById: (id) => {
    const currentGrounds = getStorageData('grounds', initialGrounds);
    return currentGrounds.find(g => g.id === id);
  },
  getSkillById: (id) => {
    const currentSkills = getStorageData('skills', initialSkills);
    return currentSkills.find(s => s.id === id);
  },
};

// Export data for direct access (for website components)
export const teamMembers = dataManager.getTeamMembers();
export const videos = dataManager.getVideos();
export const grounds = dataManager.getGrounds();
export const skills = dataManager.getSkills();
