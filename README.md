# AI Safety Incident Dashboard

A modern, responsive web application for monitoring and reporting AI safety incidents. Built with React, Tailwind CSS, and Lucide icons, this dashboard provides a comprehensive interface for tracking and managing AI-related safety events.

![Dashboard Preview](https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 📊 **Real-time Incident Tracking**: View and manage AI safety incidents in a clean, organized interface
- 🔍 **Advanced Filtering**: Filter incidents by severity level (Low, Medium, High)
- ⏱️ **Smart Sorting**: Sort incidents by date (newest/oldest first)
- 📝 **Incident Reporting**: User-friendly form for submitting new incidents
- 🎨 **Beautiful UI**: Modern design with smooth animations and transitions
- 📱 **Responsive Design**: Fully responsive layout that works on all devices
- ⚡ **Performance Optimized**: Built with React and optimized for speed

## Tech Stack

- **React**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Vite**: Next-generation frontend tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-safety-dashboard.git
cd ai-safety-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/           # React components
│   ├── FilterControls/   # Filtering functionality
│   ├── IncidentList/    # Incident display
│   ├── NewIncidentForm/ # Incident creation
│   └── SortControls/    # Sorting functionality
├── data/                # Mock data and constants
├── App.jsx             # Main application component
└── index.css           # Global styles
```

## Component Overview

- **App.jsx**: Main application component that manages state and layout
- **IncidentList**: Displays the list of incidents with expandable details
- **FilterControls**: Handles incident filtering by severity
- **SortControls**: Manages incident sorting by date
- **NewIncidentForm**: Form component for creating new incidents
- **SeverityBadge**: Visual indicator for incident severity levels

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- Styling powered by [Tailwind CSS](https://tailwindcss.com/)
- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
