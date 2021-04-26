/**
 * 从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：
 */
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}