export const test: React.FC = () => {
  const array = ['fff', 'gg', 'fff','gg', 'fff','gg', 'fff','gg', 'fff','gg', 'fff','gg', 'fff','gg', 'fff', 'gg', 'fff', 'gg', 'hhh', 'jj'];
  return (
    <>
    {array.map(item => 
      <p>{item}</p>
    )}
      <p>test</p>
      <span>elo</span>
      <p>test</p>

    
    </>
  );
};
