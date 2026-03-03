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
const initialTeamMembers = [
  { id: 1, name: "Barry", role: "Batsman", number: "96", image: "/images/barry.jpeg", country: "Team A", age: 25, matches: 120, runs: 4500, wickets: 15 },
  { id: 2, name: "Batsman", role: "Batsman", number: "10", image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp", country: "Team B", age: 24, matches: 100, runs: 3800, wickets: 8 },
  { id: 3, name: "Berry", role: "Bat/Spin", number: "11", image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp", country: "Team C", age: 26, matches: 90, runs: 2800, wickets: 45 },
  { id: 4, name: "Hammad", role: "Batsman", number: "9", image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp", country: "Team D", age: 23, matches: 80, runs: 3200, wickets: 5 },
  { id: 5, name: "Uzair", role: "Allrounder", number: "17", image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp", country: "Team E", age: 27, matches: 110, runs: 3500, wickets: 85 },
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
      mostRuns: {
        name: "Babar Azam",
        runs: 3456,
        matches: 28
      },
      mostWickets: {
        name: "Shaheen Afridi",
        wickets: 45,
        matches: 22
      },
      manOfTheMatch: {
        name: "Fakhar Zaman",
        awards: 8
      }
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
      mostRuns: {
        name: "Fakhar Zaman",
        runs: 2890,
        matches: 24
      },
      mostWickets: {
        name: "Haris Rauf",
        wickets: 38,
        matches: 19
      },
      manOfTheMatch: {
        name: "Babar Azam",
        awards: 6
      }
    }
  },
];

const initialSkills = [
  { id: 1, name: "Total Runs", value: 15480, suffix: "", color: "red" },
  { id: 2, name: "Total Wickets", value: 342, suffix: "", color: "blue" },
  { id: 3, name: "Matches Played", value: 286, suffix: "", color: "green" },
  { id: 4, name: "Career Average", value: 54.12, suffix: "", color: "purple" },
  { id: 5, name: "Best Score", value: 183, suffix: "", color: "yellow" },
  { id: 6, name: "Strike Rate", value: 89.45, suffix: "", color: "orange" },
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
