const generateRandomRoles = (rolesData: object): string[] => {
  const rolesList = [];
  for (const [role, count] of Object.entries(rolesData)) {
    for (let i = 0; i < count; i++) {
      rolesList.push(role);
    }
  }

  for (let i = rolesList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rolesList[i], rolesList[j]] = [rolesList[j], rolesList[i]];
  }

  return rolesList;
};

export default generateRandomRoles;
