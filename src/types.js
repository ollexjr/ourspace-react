String.prototype.trimMax = function (max) {
    var s = this;
    if (s.length > max) {
        return s.substr(0, max) + "..."
    }
    return s;
}
