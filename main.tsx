/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Hallpass Blog",
  author: "Hallpass",
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:muscarasoftware@gmail.com" },
    { title: "Home", url: "https://hallpass.gg" },
    { title: "Instagram", url: "https://instagram.com" },
    { title: "Twitter", url: "https://twitter.com" },
    { title: "LinkedIn", url: "https://linkedin.com" },
  ],
  description: "Welcome to the teacher's lounge, stay up to date with the latest stories, updates, tips & tricks, and so much more.",
});
