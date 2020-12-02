// AdventOfCode 2020 Day 1: Report Repair
const expenses = ["1837","1585","1894","1715","1947","1603","1746","1911","1939","1791","1800","1479","1138","1810","1931","1833","1470","1882","1725","1496","1890","1862","1990","1958","1997","1844","1524","541","2001","1591","1687","1941","1940","1561","1813","1654","1500","1575","1826","2006","679","1660","1679","1631","2008","575","1583","1883","1904","1436","1650","1532","1907","1803","1693","1700","359","1516","1625","1908","1994","1910","1644","1706","1781","1639","1662","1712","1796","1915","1550","1721","1697","1917","1665","1646","1968","1881","1893","1468","1678","1774","285","1754","1856","1677","1823","1802","1681","1587","1767","1711","1900","1983","1787","1996","1726","1982","1971","1553","1542","1863","2002","1831","1891","1555","2000","1847","1783","1873","1761","1742","1534","1993","1898","1973","1974","1597","1540","1581","1864","1452","1637","1649","1886","1965","1460","1664","1701","1647","1812","1937","1902","2004","1991","1718","1887","1606","1748","1737","1608","1641","1710","1724","705","1985","1571","1805","131","1788","1707","1513","1615","1897","1476","1927","1745","1926","1839","1807","1955","1692","1645","1699","1471","1604","1830","1622","1972","1866","1814","1816","1855","1820","1034","1673","1704","1969","1580","1980","1739","1896","434","497","1851","1933","458","1521","1551","1762","2010","1614","1840","1747","1875","1836","1895","1518","1825","1987"]
let first = "";
let second = "";
let third = "";
let result = 0;
let current = 0;
let correctAdd = [];
let correctMultiply = [];
let boolean = true;
let x = 0;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('a sum with 2 parameters or 3? ', (input) => {
    parseInt(input) === 2 ? two() : three() 
})
// Main challange
// Calculate what makes 2020 by adding 2 different parameters and then multiplying them
two = () => {
    console.time("timer"); 
    while (boolean){
        while(x <= expenses.length - 1){
            first = expenses[current]
            second = expenses[x]
            result = parseInt(first) + parseInt(second);
            if (result == 2020){
                correctAdd.push(`${first} + ${second} = ${result}`);
                correctMultiply.push(`${first} * ${second} = ${parseInt(first) * parseInt(second)}`)
            }
            x++
        }
        x = 0;
        current >= 199 ? boolean = false : current++
    }
    console.log(correctMultiply);
    console.timeEnd("timer"); 
}

// Extra challange for day 1
// Calculate what makes 2020 by adding 3 different parameters and then multiplying them
three = () => {
    console.time("timer"); 
    while (boolean){
        for(let i = 0; i < expenses.length; i++){
            first = expenses[current]
            second = expenses[i]
            for(let p = 0; p < expenses.length; p++){
                third = expenses[p]
                result = parseInt(first) + parseInt(second) + parseInt(third);
                if (result == 2020){
                    correctAdd.push(`${first} + ${second} + ${third} = ${result}`);
                    correctMultiply.push(`${first} * ${second} * ${third} = ${parseInt(first) * parseInt(second) * parseInt(third)}`)
                    console.log(correctMultiply)
                }
            }
        }
        current >= 199 ? boolean = false : current++
    }
    console.log(correctMultiply)
    console.timeEnd("timer"); 
}
