//扫描此文件夹下的所有的`.vue` 文件，并注册
export const componentsWatcher = (scanner: any) => {
  scanner.keys().map((key: string) => {
    const name = scanner(key).default.name;

    if (name) {
      console.log(name)
    }
  });
};


componentsWatcher(req)