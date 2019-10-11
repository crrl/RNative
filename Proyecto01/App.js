import React, { Component } from 'react';
import { defaultStyle } from './style-sheet';
import HomeScreen from './24CRUIDSqlLite/views/HomeScreen';
import DeleteEmployee from './24CRUIDSqlLite/views/DeleteEmployee';
import EditEmployee from './24CRUIDSqlLite/views/EditEmployee';
import showAllEmployees from './24CRUIDSqlLite/views/showAllEmployees';
import showEmployee from './24CRUIDSqlLite/views/showEmployee';
import InsertEmployee from './24CRUIDSqlLite/views/InsertEmployee';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

let colorFondo = '#F05555';
let colorEncabezado = '#FFF';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Catálogo de Empleados',
      headerStyle: { backgroundColor: colorFondo },
      headerTintColor: colorEncabezado
    }
  },
  EditEmployee: {
    screen: EditEmployee,
    navigationOptions: {
      title: 'Actualizar Empleado',
      headerStyle: { backgroundColor: colorFondo },
      headerTintColor: colorEncabezado
    }
  },
  showAllEmployees: {
    screen: showAllEmployees,
    navigationOptions: {
      title: 'Muestra Empleados',
      headerStyle: { backgroundColor: colorFondo },
      headerTintColor: colorEncabezado
    }
  },
  DeleteEmployee: {
    screen: DeleteEmployee,
    navigationOptions: {
      title: 'Eliminar Empleado',
      headerStyle: { backgroundColor: colorFondo },
      headerTintColor: colorEncabezado
    }
  },
  ShowEmployee: {
    screen: showEmployee,
    navigationOptions: {
      title: 'Mostrar Empleado',
      headerStyle: { backgroundColor: colorFondo },
      headerTintColor: colorEncabezado
    }
  },
  InsertEmployee: {
    screen: InsertEmployee,
    navigationOptions: {
      title: 'Agregar Empleado',
      headerStyle: { backgroundColor: colorFondo },
      headerTintColor: colorEncabezado
    }
  }
})

export default createAppContainer(App);