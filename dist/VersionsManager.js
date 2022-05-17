"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semver_1 = __importDefault(require("semver"));
class VersionsManager {
    /**
     * @param componentVersion - a semver of a component that uses the VersionsManager
     */
    constructor(componentVersion) {
        if (semver_1.default.valid(componentVersion) == null) {
            throw new Error('Component version is not valid');
        }
        this.componentVersion = componentVersion;
    }
    /**
     * @param version - the version of a dependency to compare against
     * @return true if {@param version} is same or newer then {@link componentVersion}
     */
    isMinorSameOrNewer(version) {
        // prevent crash with some early verifiers (which are otherwise perfectly valid)
        version = version.replace('_', '-');
        const range = '^' + this.componentVersion;
        return semver_1.default.satisfies(version, range);
    }
}
exports.default = VersionsManager;
//# sourceMappingURL=VersionsManager.js.map