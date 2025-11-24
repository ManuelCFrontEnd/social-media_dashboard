const mockData = {
    currentUser: {
        name: "Alex Doe",
        handle: "@alexdoe",
        avatar: "https://ui-avatars.com/api/?name=Alex+Doe&background=6366f1&color=fff"
    },
    posts: [
        {
            id: 1,
            user: {
                name: "Sarah Smith",
                handle: "@sarah_design",
                avatar: "https://ui-avatars.com/api/?name=Sarah+Smith&background=ec4899&color=fff"
            },
            content: "Just finished working on the new design system for our upcoming project. It's amazing how much consistency can improve the development workflow! 🎨 #design #uiux",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            time: "2 hours ago",
            likes: 245,
            comments: 42,
            shares: 12
        },
        {
            id: 2,
            user: {
                name: "Tech Insider",
                handle: "@techinsider",
                avatar: "https://ui-avatars.com/api/?name=Tech+Insider&background=10b981&color=fff"
            },
            content: "The future of AI is here. We are seeing unprecedented growth in machine learning applications across all industries. What are your thoughts on this rapid evolution? 🤖",
            image: null,
            time: "4 hours ago",
            likes: 892,
            comments: 156,
            shares: 340
        },
        {
            id: 3,
            user: {
                name: "David Chen",
                handle: "@david_dev",
                avatar: "https://ui-avatars.com/api/?name=David+Chen&background=f59e0b&color=fff"
            },
            content: "Remote work has changed my life. I can now travel and work from anywhere in the world. Currently coding from a cafe in Bali! ☕️🌴",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            time: "6 hours ago",
            likes: 567,
            comments: 89,
            shares: 23
        }
    ],
    suggestions: [
        {
            name: "Emily White",
            handle: "@emily_w",
            avatar: "https://ui-avatars.com/api/?name=Emily+White&background=8b5cf6&color=fff"
        },
        {
            name: "Startup Hub",
            handle: "@startuphub",
            avatar: "https://ui-avatars.com/api/?name=Startup+Hub&background=ef4444&color=fff"
        },
        {
            name: "Code Master",
            handle: "@codemaster",
            avatar: "https://ui-avatars.com/api/?name=Code+Master&background=3b82f6&color=fff"
        }
    ]
};
