export const site = {
  name: 'Embedded Learning Lab',
  chineseName: '嵌入式学习实验室',
  description: '从原理、实验到工程实践，建立可验证的嵌入式知识体系。',
};

export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
