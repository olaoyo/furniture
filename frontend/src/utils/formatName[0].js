const formatNameAtPositionZero = (userInfo) => {
  const name = userInfo.name[0];
  const surname = userInfo.surname[0];
  const formattedName = name + surname;

  return formattedName; 
};

export default formatNameAtPositionZero;
