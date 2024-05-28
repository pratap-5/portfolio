import React from "react";
import { IoLink } from "react-icons/io5";

function useServiceInfo() {
  const servicesInfo = [
    {
      projectName: "Realtime Chat-Application",
      imageLink: "/images/chating.jpg",
      details: `Objectives
      To develop a real-time chat application that supports one-on-one and group messaging.
      To implement user authentication and authorization to ensure secure access.
      To enable the sharing of multimedia files, such as images and videos, within the chat.
      To create a responsive user interface that provides a seamless experience across different devices.
      To ensure data integrity and security throughout the application.


      
      Technologies Used
      Node.js: A JavaScript runtime for building scalable server-side applications.
      Express: A web application framework for Node.js, used to create the backend API.
      MongoDB: A NoSQL database for storing user data and chat messages.
      React: A JavaScript library for building the frontend user interface.
      Tailwind CSS: A utility-first CSS framework for designing responsive and modern UI components.
      Socket.io: A library for enabling real-time, bidirectional communication between clients and servers.`,
      link: "https://chat-app-29u7.onrender.com",
    },
    {
      projectName: "File-Sharing app",
      imageLink: "/images/file-sharing.jpg",
      details: `
      The file sharing app is a web-based platform designed to streamline the process of transferring and managing files securely and efficiently. With a user-friendly interface and robust set of features, the app enables individuals and teams to upload, store, organize, and share files with ease.
      Key features of the file sharing app include user authentication to ensure secure access, seamless file upload and storage capabilities supporting various file formats, intuitive file management tools for organizing and categorizing files, and advanced sharing and collaboration functionalities for real-time editing and feedback.
      The app prioritizes security and privacy, employing encryption protocols to safeguard data during transit and storage, and enforcing access controls to prevent unauthorized access. Users can share files via email invitations, direct links, or by granting specific access permissions to collaborators.
      Integration with other productivity tools enhances workflow efficiency, allowing users to seamlessly collaborate on documents, track version history, and receive notifications for important updates.
      Overall, the file sharing app serves as a centralized hub for users to store, manage, and collaborate on files, empowering individuals and teams to streamline communication, enhance productivity, and achieve their goals effectively.
      `,
      link: "",
    },
    {
      projectName: "Typing Speed Game",
      imageLink: "/images/typing.webp",
      details: `The typing speed game is an engaging and interactive web-based application designed to improve users' typing skills while providing an enjoyable and competitive gaming experience. Set in a user-friendly interface with vibrant visuals and captivating sound effects, the game challenges players to test and enhance their typing speed and accuracy through a series of timed exercises and challenges.
      In the typing speed game, players are presented with various typing exercises, ranging from simple sentences to complex paragraphs and passages. Using a standard keyboard layout, players must type the displayed text as quickly and accurately as possible within a specified time limit. The game tracks players' typing speed, accuracy, and completion times, providing instant feedback and performance metrics to help players track their progress and identify areas for improvement.
      With multiple difficulty levels and customizable settings, the typing speed game offers a tailored experience for users of all skill levels, from novice typists looking to build foundational skills to experienced typists seeking to hone their accuracy and speed. Players can compete against themselves, challenge friends and colleagues, or participate in global leaderboards to see how their typing skills stack up against others around the world.
      The game's intuitive interface and responsive controls make it easy for players to jump in and start typing, while its dynamic gameplay and variety of exercises keep players engaged and motivated to continue practicing and improving their typing proficiency. Whether used as a fun pastime, a learning tool, or a competitive challenge, the typing speed game offers an entertaining and effective way for users to enhance their typing skills and become faster, more efficient typists.
      
      Overall, the typing speed game provides a fun and rewarding experience that combines the enjoyment of gaming with the practical benefits of skill development, making it an ideal choice for anyone looking to boost their typing speed and accuracy in a fun and interactive way.
    
 `,
      link: "",
    },
    {
      projectName: "Plane-Rush game",
      imageLink: "/images/planerush.jpg",
      details: `The "Plane Rush" game is an exhilarating and action-packed mobile gaming experience that puts players in the pilot's seat of a high-speed aircraft racing against time and obstacles. Set in a vibrant and dynamic 3D environment, players navigate through challenging levels filled with thrilling aerial maneuvers, daring stunts, and heart-pounding moments.
      In "Plane Rush," players take on the role of a skilled pilot tasked with completing various missions and challenges across diverse landscapes, from bustling cityscapes to scenic natural environments. With intuitive touch controls and responsive gameplay mechanics, players must steer their aircraft through tight spaces, dodge obstacles, and perform precision maneuvers to avoid collisions and reach the finish line in record time.
      The game offers multiple game modes, including time trials, obstacle courses, and endless challenges, providing players with endless opportunities for excitement and adrenaline-fueled action. As players progress through the game, they can unlock new aircraft, customize their planes with unique upgrades and paint schemes, and compete against friends and other players worldwide on online leaderboards.
      With stunning graphics, immersive sound effects, and addictive gameplay, "Plane Rush" delivers an immersive and thrilling gaming experience that will keep players on the edge of their seats as they race against the clock to become the ultimate flying ace.
      Overall, "Plane Rush" is a must-play game for aviation enthusiasts, adrenaline junkies, and casual gamers alike, offering fast-paced aerial thrills and non-stop excitement from takeoff to touchdown. Get ready to soar to new heights and experience the rush of flight like never before in "Plane Rush."`,
      link: "",
    },
    {
      projectName: "video chatting",
      imageLink: "/images/planerush.jpg",
      details: ``,
      link: "",
    },
  ];

  return servicesInfo;
}

export default useServiceInfo;
