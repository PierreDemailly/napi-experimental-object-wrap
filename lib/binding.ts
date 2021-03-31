const addon = require('../build/Release/object-wrap-demo-native');

interface IObjectWrapDemoNative
{
    greet(strName: string): string;
};

class ObjectWrapDemo {
    constructor(name: string) {
        this._addonInstance = new addon.ObjectWrapDemo(name)
    }

    greet (strName: string) {
        return this._addonInstance.greet(strName);
    }

    // private members
    private _addonInstance: IObjectWrapDemoNative;
}

export = ObjectWrapDemo;
