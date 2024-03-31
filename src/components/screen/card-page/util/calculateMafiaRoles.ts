const calculateMafiaRoles = (playerCount: number): object => {
  const roles = {
    mafia: Math.max(1, Math.ceil(playerCount / 6) - 1), // Scale mafia with player count
    sherif: playerCount >= 4 ? 1 : 0,
    doctor: Math.floor(playerCount / 20),
    courtesan: Math.floor((playerCount - 15) / 30),
    maniac: Math.floor((playerCount - 12) / 25),
    civilian: 0, // Placeholder, calculated later
  };

  // Adjust for small player counts explicitly
  roles.doctor = playerCount >= 8 ? 1 : roles.doctor;
  roles.courtesan = playerCount >= 15 ? 1 + roles.courtesan : 0;
  roles.maniac = playerCount >= 12 ? 1 + roles.maniac : 0;

  // Calculate civilian based on the sum of all other roles
  roles.civilian =
    playerCount - Object.values(roles).reduce((a, b) => a + b, 0);

  return roles;
};

export default calculateMafiaRoles;
