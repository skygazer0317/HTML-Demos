
    let employee=[
        {'name':'partha','age':20,'salary':15000,'depatment':'IT'},
        {'name':'gautham','age':21,'salary':18000,'depatment':'IT'},
        {'name':'kishore','age':19,'salary':10000,'depatment':'Finance'},
        {'name':'anand','age':22,'salary':12000,'depatment':'Infra'},
        {'name':'narendran','age':25,'salary':20000,'depatment':'Testing'},
        {'name':'thejash','age':23,'salary':30000,'depatment':'HR'},
        {'name':'vijayragavan','age':27,'salary':15000,'depatment':'Finance'}

    ]

    //TRADITIONAL FOR LOOP
    for(let i=0;i<employee.length;i++)
    console.log(employee[i])

    //FOR EACH 
    employee.forEach(e => console.log(e))
