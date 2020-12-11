const xhr =  new XMLHttpRequest();
xhr.open('GET','https://api.i-lynn.cn/getIpInfo?ip=shi&area=bushi');
xhr.onload = function(){

    const res = JSON.parse(xhr.responseText)
    console.log(res)
    console.log(res.ip)
    console.log(res.area)
}
xhr.send()





