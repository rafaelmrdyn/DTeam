const DTeam = artifacts.require("DTeam");

contract('DTeam', (accounts) => {
  it('Owner should be accounts[0]', async () => {
    const instance = await DTeam.deployed();
    const owner = await instance.owner();

    assert.equal(owner, accounts[0], "Owner should be equal to accounts[0]");
  });
  it('Team should be empty', async () => {
    const instance = await DTeam.deployed();
    const team = await instance.getTeamMembers();

    assert.equal(team.length, 0, "Team length should be 0");
  });
  it('Team length should be 1 and equal test', async () => {
    const instance = await DTeam.deployed();
    await instance.setNewMember('test');
    const team = await instance.getTeamMembers();

    assert.equal(team.length, 1, "Team length should be 1");
    assert.equal(team[0], 'test', "Team 1 element should be equal to test");
  });
});
