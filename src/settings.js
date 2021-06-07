// eslint-disable-next-line vue/max-attributes-per-line
module.exports = {
  title: '计算资源管理平台',
  test_code: 'import time\n' +
    'for i in range(110):\n' +
    '    print(i)\n' +
    '    time.sleep(1)',
  tens_code: 'import tensorflow as tf\n' +
    'import os\n' +
    'os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"\n' +
    'mnist = tf.keras.datasets.mnist\n' +
    '\n' +
    '(x_train, y_train),(x_test, y_test) = mnist.load_data()\n' +
    'x_train, x_test = x_train / 255.0, x_test / 255.0\n' +
    '\n' +
    'model = tf.keras.models.Sequential([\n' +
    '  tf.keras.layers.Flatten(input_shape=(28, 28)),\n' +
    '  tf.keras.layers.Dense(512, activation=tf.nn.relu),\n' +
    '  tf.keras.layers.Dropout(0.2),\n' +
    '  tf.keras.layers.Dense(10, activation=tf.nn.softmax)\n' +
    '])\n' +
    'model.compile(optimizer=\'adam\',\n' +
    '              loss=\'sparse_categorical_crossentropy\',\n' +
    '              metrics=[\'accuracy\'])\n' +
    '\n' +
    'model.fit(x_train, y_train, epochs=2)\n' +
    'model.evaluate(x_test, y_test)',

  docker_filecode: 'FROM ubuntu:18.04\n' +
    'ENV USER root\n' +
    '\n' +
    'RUN sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list\n' +
    'RUN apt-get clean\n' +
    'RUN apt-get update\n' +
    'RUN apt-get install -y mysql-server-5.5\n' +
    '\n' +
    '\n' +
    'COPY my.cnf /etc/mysql/my.cnf\n' +
    'COPY start.sh start.sh\n' +
    '\n' +
    'VOLUME ["/var/lib/mysql"]\n' +
    '\n' +
    'RUN rm /usr/sbin/policy-rc.d\n' +
    'CMD ["/start.sh"]\n' +
    '\n' +
    'EXPOSE 3306',

  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false
}
