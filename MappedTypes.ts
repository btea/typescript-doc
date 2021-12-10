// Mapped Types 映射类型  https://github.com/mqyqingfeng/Blog/issues/230
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};
type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

// Mapping Modifiers 映射修饰符
// 用 - 或 + 可以删除或者添加 readonly/? 等修饰符
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};
type LockedAccount = {
    readonly id: string;
    readonly name: string;
    readonly age: number;
};
type UnLockedAccount = CreateMutable<LockedAccount>;

// 删除属性中可选修饰符
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};
type MayBeUser = {
    id: string;
    name?: string;
    age?: number;
};
type User = Concrete<MayBeUser>;

// Key Remapping via as  通过as实现键名重新映射
// Uppercase<> 转为大写 Lowercase转为小写  Capitalize第一个字母转成大写  Uncapitalize第一个字母转成小写
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
};
interface Person {
    name: string;
    age: number;
    location: string;
}
type LazyPerson = Getters<Person>;

// 过滤属性
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property];
};
interface Circle {
    kind: 'circle';
    radius: number;
}
type kindLessCircle = RemoveKindField<Circle>;

// 遍历任何类型
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E['kind']]: (event: E) => void;
};
type squareEvent = { kind: 'square'; x: number; y: number };
type circleEvent = { kind: 'circle'; radius: number };
type config = EventConfig<squareEvent | circleEvent>;

// Further Exploration 深入探索
type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};
type DBFields = {
    id: { format: 'incrementing' };
    name: { type: string; pii: true };
};
type ObjectNeedingGDPRDeletion = ExtractPII<DBFields>;
