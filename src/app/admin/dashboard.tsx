"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Youtube, 
  MapPin, 
  TrendingUp, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Upload,
  Calendar,
  Target,
  Award,
  Eye,
  ChevronRight,
  Home,
  LogOut,
  Menu,
  Check,
  AlertCircle
} from "lucide-react";
import { useRouter } from "next/navigation";
import { dataManager } from "@/lib/data";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  // Authentication check
  useEffect(() => {
    // Check if we're on client side
    if (typeof window !== 'undefined') {
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
          const popped = parts.pop();
          return popped?.split(';').shift();
        }
        return null;
      };
      
      const isAuthenticated = getCookie('isAuthenticated') === 'true';
      if (!isAuthenticated) {
        router.push("/admin/login");
      }
    }
  }, [router]);

  // Form states
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [showAddVideoModal, setShowAddVideoModal] = useState(false);
  const [showAddGroundModal, setShowAddGroundModal] = useState(false);
  const [showAddSkillModal, setShowAddSkillModal] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: "", message: "" });

  // Get data from central data manager
  const [teamMembers, setTeamMembers] = useState(dataManager.getTeamMembers());
  const [videos, setVideos] = useState(dataManager.getVideos());
  const [grounds, setGrounds] = useState(dataManager.getGrounds());
  const [skills, setSkills] = useState(dataManager.getSkills());

  // Refresh data function
  const refreshData = () => {
    setTeamMembers(dataManager.getTeamMembers());
    setVideos(dataManager.getVideos());
    setGrounds(dataManager.getGrounds());
    setSkills(dataManager.getSkills());
  };

  // Form data states
  const [newMember, setNewMember] = useState({
    name: "", role: "Batsman", number: "", country: "", age: "", matches: "", runs: "", wickets: ""
  });
  const [newVideo, setNewVideo] = useState({ title: "", category: "Career", date: "", videoUrl: "" });
  const [newGround, setNewGround] = useState({ title: "", location: "", capacity: "", established: "" });
  const [newSkill, setNewSkill] = useState({ name: "", value: "", suffix: "", color: "red" });

  // Show notification
  const showNotification = (type: string, message: string) => {
    setNotification({ show: true, type, message });
    setTimeout(() => setNotification({ show: false, type: "", message: "" }), 3000);
  };

  // Handle logout
  const handleLogout = () => {
    // Clear cookies
    document.cookie = "isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "adminEmail=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
  };

  // Data operations
  const addTeamMember = () => {
    dataManager.addTeamMember(newMember);
    setNewMember({ name: "", role: "Batsman", number: "", country: "", age: "", matches: "", runs: "", wickets: "" });
    setShowAddMemberModal(false);
    refreshData();
    showNotification("success", "Team member added successfully!");
  };

  const deleteTeamMember = (id: string) => {
    dataManager.deleteTeamMember(id);
    refreshData();
    showNotification("success", "Team member deleted successfully!");
  };

  const addVideo = () => {
    dataManager.addVideo(newVideo);
    setNewVideo({ title: "", category: "Career", date: "", videoUrl: "" });
    setShowAddVideoModal(false);
    refreshData();
    showNotification("success", "Video added successfully!");
  };

  const deleteVideo = (id: string) => {
    dataManager.deleteVideo(id);
    refreshData();
    showNotification("success", "Video deleted successfully!");
  };

  const addGround = () => {
    dataManager.addGround(newGround);
    setNewGround({ title: "", location: "", capacity: "", established: "" });
    setShowAddGroundModal(false);
    refreshData();
    showNotification("success", "Ground added successfully!");
  };

  const deleteGround = (id: string) => {
    dataManager.deleteGround(id);
    refreshData();
    showNotification("success", "Ground deleted successfully!");
  };

  const addSkill = () => {
    dataManager.addSkill(newSkill);
    setNewSkill({ name: "", value: "", suffix: "", color: "red" });
    setShowAddSkillModal(false);
    refreshData();
    showNotification("success", "Skill added successfully!");
  };

  const deleteSkill = (id: string) => {
    dataManager.deleteSkill(id);
    refreshData();
    showNotification("success", "Skill deleted successfully!");
  };

  const menuItems = [
    { id: "overview", label: "Dashboard Overview", icon: Home },
    { id: "team", label: "Team Members", icon: Users },
    { id: "videos", label: "Cricket Videos", icon: Youtube },
    { id: "grounds", label: "Cricket Grounds", icon: MapPin },
    { id: "skills", label: "Career Stats", icon: TrendingUp },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {[
        { label: "Team Members", value: teamMembers.length, icon: Users, color: "blue" },
        { label: "Videos", value: videos.length, icon: Youtube, color: "red" },
        { label: "Grounds", value: grounds.length, icon: MapPin, color: "green" },
        { label: "Career Stats", value: skills.length, icon: TrendingUp, color: "purple" },
      ].map((stat: any, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 hover:border-primary transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 bg-${stat.color}-600/20 rounded-lg`}>
              <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
            </div>
            <span className="text-3xl font-bold text-white">{stat.value}</span>
          </div>
          <h3 className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</h3>
        </motion.div>
      ))}
    </div>
  );

  const renderTeamManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Team Members Management</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddMemberModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Member
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {teamMembers.map((member: any) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 hover:border-primary transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <span className="inline-block px-3 py-1 bg-red-600/20 border border-red-600/50 rounded-full text-red-400 text-sm">
                  {member.role}
                </span>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-blue-600/20 border border-blue-600/50 rounded-lg text-blue-400 hover:bg-blue-600/30"
                >
                  <Edit className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => deleteTeamMember(member.id)}
                  className="p-2 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 hover:bg-red-600/30"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Number:</span>
                <span className="text-white ml-2">#{member.number}</span>
              </div>
              <div>
                <span className="text-gray-400">Age:</span>
                <span className="text-white ml-2">{member.age}</span>
              </div>
              <div>
                <span className="text-gray-400">Country:</span>
                <span className="text-white ml-2">{member.country}</span>
              </div>
              <div>
                <span className="text-gray-400">Matches:</span>
                <span className="text-white ml-2">{member.matches}</span>
              </div>
              <div>
                <span className="text-gray-400">Runs:</span>
                <span className="text-white ml-2">{member.runs}</span>
              </div>
              <div>
                <span className="text-gray-400">Wickets:</span>
                <span className="text-white ml-2">{member.wickets}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderVideoManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Cricket Videos Management</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddVideoModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Video
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {videos.map((video: any) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 hover:border-primary transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <span className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-600/50 rounded-full text-purple-400 text-sm">
                  {video.category}
                </span>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-blue-600/20 border border-blue-600/50 rounded-lg text-blue-400 hover:bg-blue-600/30"
                >
                  <Edit className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => deleteVideo(video.id)}
                  className="p-2 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 hover:bg-red-600/30"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Date:</span>
                <span className="text-white ml-2">{video.date}</span>
              </div>
              <div>
                <span className="text-gray-400">Views:</span>
                <span className="text-white ml-2">{video.views}</span>
              </div>
              <div>
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400 ml-2">Published</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderGroundsManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Cricket Grounds Management</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddGroundModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Ground
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {grounds.map((ground: any) => (
          <motion.div
            key={ground.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 hover:border-primary transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{ground.title}</h3>
                <span className="inline-block px-3 py-1 bg-green-600/20 border border-green-600/50 rounded-full text-green-400 text-sm">
                  {ground.location}
                </span>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-blue-600/20 border border-blue-600/50 rounded-lg text-blue-400 hover:bg-blue-600/30"
                >
                  <Edit className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => deleteGround(ground.id)}
                  className="p-2 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 hover:bg-red-600/30"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Capacity:</span>
                <span className="text-white ml-2">{ground.capacity}</span>
              </div>
              <div>
                <span className="text-gray-400">Established:</span>
                <span className="text-white ml-2">{ground.established}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderSkillsManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Career Stats Management</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddSkillModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Stat
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skills.map((skill: any) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 hover:border-primary transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <span className="text-3xl font-bold text-primary">{skill.value}{skill.suffix}</span>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-blue-600/20 border border-blue-600/50 rounded-lg text-blue-400 hover:bg-blue-600/30"
                >
                  <Edit className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => deleteSkill(skill.id)}
                  className="p-2 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 hover:bg-red-600/30"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div>
            {renderOverview()}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400">New video added: "Training Secrets"</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400">Team member updated: Barry</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-400">Career stats updated</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAddVideoModal(true)}
                    className="p-3 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30 transition-all text-sm"
                  >
                    <Upload className="w-4 h-4 mb-1" />
                    Upload Video
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAddMemberModal(true)}
                    className="p-3 bg-blue-600/20 border border-blue-600/50 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-all text-sm"
                  >
                    <Users className="w-4 h-4 mb-1" />
                    Add Player
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAddGroundModal(true)}
                    className="p-3 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400 hover:bg-green-600/30 transition-all text-sm"
                  >
                    <MapPin className="w-4 h-4 mb-1" />
                    Add Ground
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAddSkillModal(true)}
                    className="p-3 bg-purple-600/20 border border-purple-600/50 rounded-lg text-purple-400 hover:bg-purple-600/30 transition-all text-sm"
                  >
                    <TrendingUp className="w-4 h-4 mb-1" />
                    Update Stats
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        );
      case "team":
        return renderTeamManagement();
      case "videos":
        return renderVideoManagement();
      case "grounds":
        return renderGroundsManagement();
      case "skills":
        return renderSkillsManagement();
      case "settings":
        return (
          <div className="bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">General Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Enable notifications</span>
                    <button className="w-12 h-6 bg-primary/20 border border-primary/50 rounded-full relative">
                      <div className="w-5 h-5 bg-primary rounded-full absolute left-0.5 top-0.5"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Auto-save drafts</span>
                    <button className="w-12 h-6 bg-primary/20 border border-primary/50 rounded-full relative">
                      <div className="w-5 h-5 bg-primary rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Admin Email</label>
                    <input type="email" className="w-full mt-1 px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white" placeholder="admin@spartansboys.com" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Password</label>
                    <input type="password" className="w-full mt-1 px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white" placeholder="••••••••" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-black/50 to-background text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Notification */}
      {notification.show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg border ${
            notification.type === "success" 
              ? "bg-green-600/20 border-green-600/50 text-green-400" 
              : "bg-red-600/20 border-red-600/50 text-red-400"
          }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === "success" ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span>{notification.message}</span>
          </div>
        </motion.div>
      )}

      <div className="flex h-screen">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: sidebarOpen ? 0 : -300 }}
          className="relative z-20 w-64 bg-black/60 backdrop-blur-xl border-r border-white/10"
        >
          <div className="p-6">
            <h1 className="text-2xl font-black text-primary mb-8">SPARTANS ADMIN</h1>
            
            <nav className="space-y-2">
              {menuItems.map((item: any) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id 
                      ? "bg-primary/20 border border-primary/50 text-primary" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              ))}
            </nav>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-600/20 hover:border-red-600/50 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Logout</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-black/40 backdrop-blur-xl border-b border-white/10">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20"
                >
                  <Menu className="w-5 h-5" />
                </motion.button>
                <h2 className="text-xl font-semibold text-white">
                  {menuItems.find(item => item.id === activeTab)?.label}
                </h2>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-400">
                  Welcome, Admin
                </div>
                <div className="w-10 h-10 bg-primary/20 border-2 border-primary/50 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">A</span>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>

      {/* Add Member Modal */}
      {showAddMemberModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/60 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 w-full max-w-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Add Team Member</h3>
              <button
                onClick={() => setShowAddMemberModal(false)}
                className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={newMember.name}
                onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <select
                value={newMember.role}
                onChange={(e) => setNewMember({...newMember, role: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              >
                <option value="Batsman">Batsman</option>
                <option value="Bowler">Bowler</option>
                <option value="Allrounder">Allrounder</option>
                <option value="Bat/Spin">Bat/Spin</option>
              </select>
              <input
                type="text"
                placeholder="Number"
                value={newMember.number}
                onChange={(e) => setNewMember({...newMember, number: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="text"
                placeholder="Country"
                value={newMember.country}
                onChange={(e) => setNewMember({...newMember, country: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="number"
                placeholder="Age"
                value={newMember.age}
                onChange={(e) => setNewMember({...newMember, age: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="number"
                placeholder="Matches"
                value={newMember.matches}
                onChange={(e) => setNewMember({...newMember, matches: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="number"
                placeholder="Runs"
                value={newMember.runs}
                onChange={(e) => setNewMember({...newMember, runs: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="number"
                placeholder="Wickets"
                value={newMember.wickets}
                onChange={(e) => setNewMember({...newMember, wickets: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
            </div>
            
            <div className="flex gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addTeamMember}
                className="flex-1 py-2 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30"
              >
                <Save className="w-4 h-4 inline mr-2" />
                Save Member
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddMemberModal(false)}
                className="flex-1 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Add Video Modal */}
      {showAddVideoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/60 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 w-full max-w-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Add Cricket Video</h3>
              <button
                onClick={() => setShowAddVideoModal(false)}
                className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Video Title"
                value={newVideo.title}
                onChange={(e) => setNewVideo({...newVideo, title: e.target.value})}
                className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <select
                value={newVideo.category}
                onChange={(e) => setNewVideo({...newVideo, category: e.target.value})}
                className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              >
                <option value="Career">Career</option>
                <option value="Training">Training</option>
                <option value="Mindset">Mindset</option>
                <option value="Nutrition">Nutrition</option>
              </select>
              <input
                type="date"
                value={newVideo.date}
                onChange={(e) => setNewVideo({...newVideo, date: e.target.value})}
                className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="url"
                placeholder="YouTube Video URL"
                value={newVideo.videoUrl}
                onChange={(e) => setNewVideo({...newVideo, videoUrl: e.target.value})}
                className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
            </div>
            
            <div className="flex gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addVideo}
                className="flex-1 py-2 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30"
              >
                <Save className="w-4 h-4 inline mr-2" />
                Save Video
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddVideoModal(false)}
                className="flex-1 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Add Ground Modal */}
      {showAddGroundModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/60 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 w-full max-w-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Add Cricket Ground</h3>
              <button
                onClick={() => setShowAddGroundModal(false)}
                className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ground Name"
                value={newGround.title}
                onChange={(e) => setNewGround({...newGround, title: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="text"
                placeholder="Location"
                value={newGround.location}
                onChange={(e) => setNewGround({...newGround, location: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="text"
                placeholder="Capacity"
                value={newGround.capacity}
                onChange={(e) => setNewGround({...newGround, capacity: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="text"
                placeholder="Established Year"
                value={newGround.established}
                onChange={(e) => setNewGround({...newGround, established: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
            </div>
            
            <div className="flex gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addGround}
                className="flex-1 py-2 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30"
              >
                <Save className="w-4 h-4 inline mr-2" />
                Save Ground
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddGroundModal(false)}
                className="flex-1 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Add Skill Modal */}
      {showAddSkillModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/60 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 w-full max-w-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Add Career Stat</h3>
              <button
                onClick={() => setShowAddSkillModal(false)}
                className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Stat Name"
                value={newSkill.name}
                onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="number"
                placeholder="Value"
                value={newSkill.value}
                onChange={(e) => setNewSkill({...newSkill, value: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <input
                type="text"
                placeholder="Suffix (optional)"
                value={newSkill.suffix}
                onChange={(e) => setNewSkill({...newSkill, suffix: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              />
              <select
                value={newSkill.color}
                onChange={(e) => setNewSkill({...newSkill, color: e.target.value})}
                className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
              >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
              </select>
            </div>
            
            <div className="flex gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addSkill}
                className="flex-1 py-2 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30"
              >
                <Save className="w-4 h-4 inline mr-2" />
                Save Stat
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddSkillModal(false)}
                className="flex-1 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
