const products = [
    {
      name: 'Coca Cola'
    },
    {
      name: 'Fanta'
    },
    {
      name: 'Sprinte'
    }
  ]
  
  db.clientes.find({ edad: { $gt: 34 }  }) // MAYOR QUE
  
  db.clientes.find({ edad: { $gte: 34 }  }) // MAYOR O IGUAL
  
  db.clientes.find({ edad: { $lt: 34 }  }) // MENOR QUE

  db.clientes.find({ edad: { $lte: 34 }  }) // MENOS O IGUAL
  
  db.clientes.find({ edad: { $eq: 34 }  }) // SEA IGUAL

  db.clientes.find({ edad: { $ne: 34 }  }) // NO IGUAL O DISTINTO
                                            
  db.clientes.find({ $or: [ { name: 'Jaime' }, { edad: 40 } ]  } ) // TRAEME LA CONDICION NUMERO 1 SINO TRAEME EL 2, YA
                                                                    // CON QUE SE CUMPLE 1 DE LOS 2 TE LO TRAE
  
  db.clientes.find({ edad: { $exists: true } }) // DEVUELVE TODOS LOS CLIENTES CUYA CONDICION(EDAD) EXISTE
  
  db.clientes.find({ edad: { $exists: false } }) // DEVUELVE TODOS LOS CLIENTES CUYA CONDICION(EDAD) NO EXISTE
  
  db.clientes.find({ name: { $in: ['Jaime', 'Carlos'] } }) // DEVUELVEME LOS CLIENTES CUYO NOMBRE SEAN LOS QUE VIENEN EN []
  
  db.clientes.find({ name: { $nin: ['Jaime', 'Carlos'] } })// DEVUELVE LOS CLIENTES CUYO NOMBRE NO SEAN LO DEL []
  
  const newClients = [
    {
      name: 'Joaquin',
      edad: 23,
      cursos: [
        'Desarrollo Web',
        'React JS',
        'Programación Backend'
      ]
    },
    {
      name: 'Alma',
      edad: 23,
      cursos: [
        'Desarrollo Web',
        'Programación Backend'
      ]
    },
    {
      name: 'Sofia',
      edad: 23,
      cursos: [
        'React JS',
        'Programación Backend'
      ]
    },
  
    {
      name: 'Jorge',
      edad: 23,
      cursos: [
        'Desarrollo Web',
        'React JS',
        'Programación Backend'
      ]
    }
  ]
  
  const newClient = {
    name: 'Aaron',
    edad: 23,
    cursos: []
  }
  
  db.clientes.insertMany(newClients)
  
  db.clientes.find({ cursos: { $size: 3 }}) //OBTENIENDO LA CANTIDAD DE (EN ESTE CASO) CURSOS QUE HAY EN EL ARRAY
  
  db.clientes.find({ cursos: { $all: [ 'Desarrollo Web', 'React JS', 'Programación Backend' ] } })
  //QUE CUMPLAN CON TODOS LOS ARRAY QUE ESTAS PIDIENDO
  
  db.clientes.find({ cursos: { $elemMatch: { $eq: 'React JS' } } })//TE TRAE LOS CLIENTES CUYO CURSO EN LA ARRAY LO TIENEN
  
  const benjamin = {
    name: 'Benjamin',
    edad: 25,
    cursos: ['Desarrollo Web'],
    address: {
      calle: 'XXXX',
      numero: 10,
      ciudad: 'Buenos Aires'
    }
  }
  
  db.clientes.insertOne(benjamin)