# Challenge Play - Git Learning Tasks

## Backend Tasks ⚙️

### Core Game System
- [ ] Add Git Game questions database
  - Basic Git commands
  - Branching and merging
  - Collaboration workflows
  - Best practices

- [ ] Game Management
  - [ ] Score calculation system
  - [ ] Progress tracking
  - [ ] Game history storage
  - [ ] Basic analytics for user performance

### Game Level System
- [ ] Level-based Game Organization
  - [ ] Add level field to games
  - [ ] Order games by level
  - [ ] Group games by level in queries
  - [ ] Track completed games per level

- [ ] Level Progression Control
  - [ ] Check if all level games completed
  - [ ] Lock/unlock next level games
  - [ ] Block access to higher level games
  - [ ] Track level completion status

### XP and Leveling System
- [ ] XP Management
  - [ ] Add XP field to user model
  - [ ] Implement 50 XP reward per completed game
  - [ ] Calculate total user XP
  - [ ] Track XP history

- [ ] Level System
  - [ ] Define level thresholds
  - [ ] Track completed games per level
  - [ ] Implement level-up logic
  - [ ] Store user level progress

- [ ] Leaderboard System
  - [ ] Create global XP leaderboard
  - [ ] Add user ranking system
  - [ ] Store leaderboard history
  - [ ] Update leaderboard

### Admin System
- [ ] Statistics Dashboard
  - [ ] Calculate total users count
  - [ ] Calculate total games count
  - [ ] Calculate total enrollments
  
- [ ] User Management
  - [ ] Create new users
  - [ ] Edit user details
  - [ ] Delete users
  - [ ] User search and filtering

- [ ] Game Management
  - [ ] Create new games with level assignment
  - [ ] Edit game details and level
  - [ ] Delete games
  - [ ] Game search and filtering
  - [ ] Order games by level in admin view

- [ ] Question Management
  - [ ] Create new questions
  - [ ] Edit question details
  - [ ] Delete questions
  - [ ] Question search and filtering

### API Endpoints
- [ ] Game data endpoints
  - [ ] Get game questions
  - [ ] Submit answers
  - [ ] Get user progress
  - [ ] Get game history
  - [ ] Get available games by level
  - [ ] Check level completion status

- [ ] XP & Level endpoints
  - [ ] Get user XP
  - [ ] Get user level
  - [ ] Get level progress
  - [ ] Get XP history

- [ ] Leaderboard endpoints
  - [ ] Get global rankings
  - [ ] Get user rank
  - [ ] Get top players
  - [ ] Get level-based rankings

- [ ] Admin endpoints
  - [ ] Get dashboard statistics
  - [ ] CRUD operations for users
  - [ ] CRUD operations for games
  - [ ] CRUD operations for questions

## Frontend Tasks 🎨

### Game Interface
- [ ] Game Question Display
  - [ ] Question card layout
  - [ ] Multiple choice options
  - [ ] Progress indicator
  - [ ] Score display

### Game Level Interface
- [ ] Level-based Game Display
  - [ ] Group games by level
  - [ ] Show locked/unlocked status
  - [ ] Display completion requirements
  - [ ] Level progress indicator

### XP and Level UI
- [ ] XP Display
  - [ ] Current XP indicator
  - [ ] XP progress bar
  - [ ] XP gain animations
  - [ ] Level-up notifications

- [ ] Level Interface
  - [ ] Current level display
  - [ ] Level progress tracking
  - [ ] Games completed in level
  - [ ] Next level preview

- [ ] Leaderboard Interface
  - [ ] Global rankings table
  - [ ] User's current rank
  - [ ] Top players list
  - [ ] XP comparison charts

### Admin Interface
- [ ] Statistics Cards
  - [ ] Total users card with real data
  - [ ] Total games card with real data
  - [ ] Total enrollments card with real data
  - [ ] Auto-refresh functionality

- [ ] User Management Interface
  - [ ] User list table with actions
  - [ ] User creation form
  - [ ] User edit form
  - [ ] Delete confirmation modal

- [ ] Game Management Interface
  - [ ] Game list with actions
  - [ ] Game creation form
  - [ ] Game edit form
  - [ ] Delete confirmation modal
  - [ ] Questions count display
  - [ ] View game questions button

- [ ] Question Management Interface
  - [ ] Game tabs/dropdown for filtering
  - [ ] Questions list grouped by selected game
  - [ ] Question list with actions
  - [ ] Question creation form with game selection
  - [ ] Question edit form
  - [ ] Delete confirmation modal
  - [ ] Bulk actions for selected game's questions

### User Dashboard
- [ ] Progress Overview
  - [ ] XP summary
  - [ ] Current level
  - [ ] Ranking position
  - [ ] Achievement badges

- [ ] Statistics Display
  - [ ] Total XP earned
  - [ ] Games completed
  - [ ] Level progression
  - [ ] Ranking history

## Completed Tasks ✅
- User authentication system
- Basic game CRUD operations
- Login/Register pages
- Basic game interface
- Admin panel layout

## Next Steps 🎯
1. Implement admin statistics cards
2. Add admin CRUD operations
3. Implement level-based game progression
4. Implement XP system
5. Add level tracking
6. Create leaderboard
7. Update user dashboard with XP/Level
8. Add leaderboard UI
9. Implement game scoring system
10. Add progress tracking
11. Improve game navigation

## Notes 📝
- Keep interface simple and intuitive
- Focus on Git learning experience
- Ensure mobile responsiveness
- Add helpful Git command explanations
- XP system should be transparent and fair
- Leaderboard should update in real-time
- Level progression should be achievable
- Admin interface should be secure and efficient
- Group and display questions by their respective games
- Enable easy filtering and management of questions within games
- Games must be completed sequentially by level
- Users cannot skip levels
- All games in current level must be completed to unlock next level
- Clear indication of locked/unlocked games 