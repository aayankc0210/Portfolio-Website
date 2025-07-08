import React, { useState } from 'react';

const App = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com ",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 .297c-6.378 0-11.572 5.194-11.572 11.572 0 5.08 3.275 9.363 7.875 10.92.576.11.78-.246.78-.547 0-.27-.01-1.084-.014-2.04-3.205.697-3.868-1.55-3.868-1.55-.518-1.315-1.268-1.665-1.268-1.665-1.036-.707.078-.69.078-.69 1.143.08 1.747 1.17 1.747 1.17 1.015 1.728 2.666 1.227 3.315.936.103-.727.402-1.227.727-1.507-2.528-.286-5.164-1.263-5.164-5.644 0-1.242.446-2.258 1.17-3.042-.117-.29-.507-1.45.11-3.008 0 0 .95-.302 3.105 1.16.902-.25.187-.245.187-.245-1.066-.153-2.17-.524-2.17-2.324 0-.507.182-.915.485-1.237-2.454-.277-5.023-1.22-5.023-5.393 0-1.173.416-2.125 1.095-2.875-.108-.27-.472-1.36.104-2.836 0 0 1.004-.32 3.296 1.22C8.38 6.65 9.127 6.4 9.88 6.37c.753.03 1.497.263 2.11.697.66.466 1.084 1.015 1.084 1.015 1.654 2.71 3.21 2.28 3.21 2.28.64.17 1.32.24 2.01.24 6.38 0 11.57-5.19 11.57-11.57 0-.7-.026-1.38-.08-1.98A8.45 8.45 0 0024 4.538c-.82.36-1.7.58-2.6.697.91-.55 1.59-1.4 1.59-2.37 0-1.72-.88-3.11-2.34-3.76-.24-.06-.5-.09-.76-.09s-.52.03-.76.09c-1.46.65-2.34 2.04-2.34 3.76 0 .97.68 1.82 1.59 2.37-.56.16-1.16.25-1.79.25h-.01c-2.75 0-4.27-2.65-3.36-4.1.8-.34 1.66-.52 2.55-.52.3 0 .59.04.87.11-.74-.47-1.55-1.18-1.55-2.07 0-.46.16-.84.45-1.14 1.63.2 3.37-.38 4.45-1.01-.04-.07-.08-.14-.13-.21-.03-.05-.07-.1-.1-.15-.2-.33-.44-.64-.73-.92-.28-.28-.6-.52-.94-.72-.05-.03-.1-.07-.15-.1-.07-.05-.14-.09-.21-.13-.63-1.1-1.68-1.82-2.9-1.82-1.05 0-1.98.56-2.45 1.38-.49.85-.73 1.85-.73 2.88 0 .38.04.76.11 1.12-.77-.04-1.51-.23-2.17-.56v.06c0 1.12.5 2.14 1.3 2.77-.13.04-.27.06-.41.06-.1 0-.2-.01-.3-.03.21.66.81 1.15 1.52 1.15-.02.09-.04.18-.04.28 0 .77.55 1.33 1.22 1.45.36.07.74.09 1.1.09.27 0 .53-.03.78-.08.68.45 1.48.7 2.33.7 2.8 0 4.29-2.09 4.29-4.02 0-.2-.02-.39-.05-.58.29-.21.61-.33.94-.33z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com ",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com ",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.739 0 12c0 3.26.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.739 24 12 24c3.26 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.948 0-3.26-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26.001 12 .001z" />
          <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
          <circle cx="18.01" cy="5.99" r="1.5" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com ",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:aayankc@example.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full backdrop-blur-lg bg-black/40 border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
        {/* Hero Section */}
        <div className="p-10 text-center">
          <div className="inline-block mb-6">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-500/50 shadow-lg transform transition-transform duration-500 hover:rotate-6">
              <img
                src="https://picsum.photos/id/1027/300/300 "
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-300">
            Aayan KC
          </h1>
          <p className="mt-3 text-lg text-gray-300">Full Stack Developer & UI/UX Designer</p>
        </div>

        {/* Bio Section */}
        <div className="px-10 pb-10">
          <p className="text-gray-400 leading-relaxed text-center">
            I build beautiful web experiences with a focus on performance and user experience.
            Passionate about open source, design systems, and creating impactful digital products.
          </p>
        </div>

        {/* Social Links */}
        <div className="px-6 pb-10">
          <div className="grid grid-cols-1 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`group relative px-6 py-4 rounded-xl flex items-center space-x-4 transition-all duration-300 transform ${
                  hoveredLink === index ? 'bg-blue-600/30 scale-[1.02]' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <span className="flex-shrink-0 text-blue-400 group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </span>
                <span className="font-medium text-lg group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 text-blue-300 transition-opacity duration-300">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-6 text-center text-sm text-gray-500 border-t border-white/10">
          © {new Date().getFullYear()} Aayan KC. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default App;