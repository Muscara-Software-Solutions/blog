/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Hallpass",
  author: "Hallpass",
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  footer: <footer><script async src="https://analytics.muscarasoftware.com/script.js" data-website-id="fbef8858-2a41-4bb6-8657-80d00dcd4ea0"></script></footer>,
  links: [
    { title: "Email", url: "mailto:muscarasoftware@gmail.com" },
    { title: "Home", url: "https://hallpass.gg" },
    { title: "Twitter", url: "https://twitter.com/muscarasoftware" },
    { title: "LinkedIn", url: "https://www.linkedin.com/company/muscara-software-solutions/?viewAsMember=true" },
  ],
  description: "Stay up to date with the latest announcements, updates, tips, and more.",
});
