function getReadTime(markdown: string): number {
  const words = markdown.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export default getReadTime;
