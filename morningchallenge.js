function tower ( num ) {
    let towerArr = [];
    for (let i = 0; i < num; i++) {
        tower.push(" ".repeat(num -i -1)
        + "*".repeat((i * 2) +1)
        + " ".repeat(num -i -1))
    }
    return tower;
}
console.log(buildTower(7))

tower(4)