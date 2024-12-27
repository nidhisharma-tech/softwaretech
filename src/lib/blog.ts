interface BlogCard {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  readTime: string;
}

export async function getBlogCard(): Promise<BlogCard[]> {
  // In a real application, this would fetch from a CMS or database
  return [
    {
      title: 'Building a Successful Career in Software Engineering',
      excerpt:
        'Learn the key strategies and skills needed to advance your software engineering career.',
      date: '2024-01-15',
      author: 'John Doe',
      slug: 'building-successful-career',
      readTime: '5 min',
    },
    {
      title: 'System Design Interview Preparation Guide',
      excerpt:
        'A comprehensive guide to preparing for system design interviews at top tech companies.',
      date: '2024-01-10',
      author: 'Jane Smith',
      slug: 'system-design-interview-guide',
      readTime: '8 min',
    },
    {
      title: 'Effective Technical Leadership',
      excerpt:
        'Key principles and practices for becoming an effective technical leader.',
      date: '2024-01-05',
      author: 'Mike Johnson',
      slug: 'effective-technical-leadership',
      readTime: '6 min',
    },
  ];
}
