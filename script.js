document.addEventListener('DOMContentLoaded', () => {
    // Render Feed
    const feedContainer = document.getElementById('feed-container');

    function renderFeed() {
        feedContainer.innerHTML = mockData.posts.map(post => `
            <div class="post-card">
                <div class="post-header">
                    <div class="post-user">
                        <img src="${post.user.avatar}" alt="${post.user.name}">
                        <div class="post-user-info">
                            <h4>${post.user.name}</h4>
                            <span>${post.user.handle} • ${post.time}</span>
                        </div>
                    </div>
                    <div class="post-meta">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div class="post-content">
                    <p>${post.content}</p>
                    ${post.image ? `<img src="${post.image}" alt="Post Image" class="post-image">` : ''}
                </div>
                <div class="post-actions">
                    <button class="action-btn"><i class="far fa-heart"></i> ${post.likes}</button>
                    <button class="action-btn"><i class="far fa-comment"></i> ${post.comments}</button>
                    <button class="action-btn"><i class="far fa-share-square"></i> ${post.shares}</button>
                    <button class="action-btn"><i class="far fa-bookmark"></i></button>
                </div>
            </div>
        `).join('');
    }

    // Render Suggestions
    const suggestionsContainer = document.getElementById('suggestions-container');

    function renderSuggestions() {
        suggestionsContainer.innerHTML = mockData.suggestions.map(user => `
            <div class="suggestion-item">
                <img src="${user.avatar}" alt="${user.name}">
                <div class="suggestion-info">
                    <h4>${user.name}</h4>
                    <p>${user.handle}</p>
                </div>
                <button class="follow-btn">Follow</button>
            </div>
        `).join('');
    }

    // Initialize
    renderFeed();
    renderSuggestions();

    // Tab Switching Logic
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // In a real app, this would filter the feed
        });
    });

    // Navigation Active State & View Switching
    const navLinks = document.querySelectorAll('.nav-link');
    const views = document.querySelectorAll('.view-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Update Nav State
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Switch View
            const targetId = link.getAttribute('data-page') + '-view';
            views.forEach(view => {
                view.style.display = 'none';
                if (view.id === targetId) {
                    view.style.display = 'block';
                }
            });

            // Specific Render Logic for Pages
            if (targetId === 'feed-view') {
                renderFullFeed();
            } else if (targetId === 'profile-view') {
                renderProfilePosts();
            }
        });
    });

    function renderFullFeed() {
        const container = document.getElementById('full-feed-container');
        if (container.innerHTML.trim() === '') {
            container.innerHTML = mockData.posts.map(post => createPostHTML(post)).join('');
        }
    }

    function renderProfilePosts() {
        const container = document.getElementById('profile-posts-container');
        if (container.innerHTML.trim() === '') {
            // Filter posts for current user (simulated with first post)
            const userPosts = [mockData.posts[0], mockData.posts[2]];
            container.innerHTML = userPosts.map(post => createPostHTML(post)).join('');
        }
    }

    function createPostHTML(post) {
        return `
            <div class="post-card">
                <div class="post-header">
                    <div class="post-user">
                        <img src="${post.user.avatar}" alt="${post.user.name}">
                        <div class="post-user-info">
                            <h4>${post.user.name}</h4>
                            <span>${post.user.handle} • ${post.time}</span>
                        </div>
                    </div>
                    <div class="post-meta">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div class="post-content">
                    <p>${post.content}</p>
                    ${post.image ? `<img src="${post.image}" alt="Post Image" class="post-image">` : ''}
                </div>
                <div class="post-actions">
                    <button class="action-btn"><i class="far fa-heart"></i> ${post.likes}</button>
                    <button class="action-btn"><i class="far fa-comment"></i> ${post.comments}</button>
                    <button class="action-btn"><i class="far fa-share-square"></i> ${post.shares}</button>
                    <button class="action-btn"><i class="far fa-bookmark"></i></button>
                </div>
            </div>
        `;
    }
});
