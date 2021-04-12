const dataB = {
  'name': '流程B',
  'nodeList': [
    {
      'id': 'tensorflow_train',
      'name': 'tensorflow_train',
      'type': 'timer',
      'left': '60.000030517578125px',
      'top': '150.00000381469727px',
      'ico': 'el-icon-menu',
      'state': 'success'
    },
    {
      'id': 'tensorflow_test',
      'name': 'tensorflow_test',
      'type': 'timer',
      'left': '360.0000305175781px',
      'top': '150.00000381469727px',
      'ico': 'el-icon-menu',
      'state': 'success'
    },
    {
      'id': 'FlaskApp',
      'name': 'FlaskApp',
      'type': 'timer',
      'left': '660.0000305175781px',
      'top': '150.00000381469727px',
      'ico': 'el-icon-menu',
      'state': 'success'
    }
  ],
  'lineList': [
    {
      'from': 'tensorflow_train',
      'to': 'tensorflow_test'
    },
    {
      'from': 'tensorflow_test',
      'to': 'FlaskApp'
    }
  ]
}

export function getDataB() {
  return dataB
}
