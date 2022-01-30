export const formatdate = (dateString): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    dateStyle: 'medium',
  });
};
