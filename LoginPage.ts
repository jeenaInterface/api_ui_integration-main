"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_helpers_1 = require("../api/api_helpers");
var PlaywrightWrappers_1 = require("../helper/wrapper/PlaywrightWrappers");
var LoginPage = /** @class */ (function () {
    function LoginPage(page, context) {
        this.page = page;
        this.Elements = {
            dashboardLabel: "//a[contains(text(),'Dashboard')]",
        };
        this.base = new PlaywrightWrappers_1.default(page);
        this.context = context; // Assign context to class property
    }
    LoginPage.prototype.loginAndRedirectToDashboard = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, api_helpers_1.loginAPI)(username, password)];
                    case 1:
                        token = _a.sent();
                        // Set the authentication token as a cookie
                        return [4 /*yield*/, this.context.addCookies([{
                                    name: 'auth_token',
                                    value: token,
                                    secure: true,
                                    httpOnly: true,
                                    sameSite: 'Strict',
                                    domain: 'apmtest.interfacesys.com',
                                    path: '/'
                                }])];
                    case 2:
                        // Set the authentication token as a cookie
                        _a.sent();
                        // Directly navigate to the dashboard after login
                        return [4 /*yield*/, this.page.goto("https://apmtest.interfacesys.com/#/nav/dashboard")];
                    case 3:
                        // Directly navigate to the dashboard after login
                        _a.sent();
                        // Wait for the dashboard label to ensure redirection
                        return [4 /*yield*/, this.page.waitForSelector(this.Elements.dashboardLabel)];
                    case 4:
                        // Wait for the dashboard label to ensure redirection
                        _a.sent(); // Assuming Elements.dashboardLabel is a valid locator
                        console.log("Redirected to dashboard");
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error("An error occurred:", error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return LoginPage;
}());
exports.default = LoginPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRDovYXBpX3VpX2ludGVncmF0aW9uL3NyYy9wYWdlcy9Mb2dpblBhZ2UudHMiLCJzb3VyY2VzIjpbIkQ6L2FwaV91aV9pbnRlZ3JhdGlvbi9zcmMvcGFnZXMvTG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQThDO0FBQzlDLDJFQUFxRTtBQUVyRTtJQUlJLG1CQUFvQixJQUFVLEVBQUUsT0FBdUI7UUFBbkMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUt0QixhQUFRLEdBQUc7WUFDZixjQUFjLEVBQUUsbUNBQW1DO1NBQ3RELENBQUE7UUFORyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksNEJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxtQ0FBbUM7SUFDL0QsQ0FBQztJQU1LLCtDQUEyQixHQUFqQyxVQUFrQyxRQUFnQixFQUFFLFFBQWdCOzs7Ozs7O3dCQUU5QyxxQkFBTSxJQUFBLHNCQUFRLEVBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFBOzt3QkFBMUMsS0FBSyxHQUFHLFNBQWtDO3dCQUVoRCwyQ0FBMkM7d0JBQzNDLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7b0NBQzNCLElBQUksRUFBRSxZQUFZO29DQUNsQixLQUFLLEVBQUUsS0FBSztvQ0FDWixNQUFNLEVBQUUsSUFBSTtvQ0FDWixRQUFRLEVBQUUsSUFBSTtvQ0FDZCxRQUFRLEVBQUUsUUFBUTtvQ0FDbEIsTUFBTSxFQUFFLDBCQUEwQjtvQ0FDbEMsSUFBSSxFQUFFLEdBQUc7aUNBQ1osQ0FBQyxDQUFDLEVBQUE7O3dCQVRILDJDQUEyQzt3QkFDM0MsU0FRRyxDQUFDO3dCQUVKLGlEQUFpRDt3QkFDakQscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0RBQWtELENBQUMsRUFBQTs7d0JBRHhFLGlEQUFpRDt3QkFDakQsU0FBd0UsQ0FBQzt3QkFFekUscURBQXFEO3dCQUNyRCxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFBOzt3QkFEN0QscURBQXFEO3dCQUNyRCxTQUE2RCxDQUFDLENBQUMsc0RBQXNEO3dCQUVySCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Ozs7d0JBR3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsT0FBSyxDQUFDLENBQUM7Ozs7OztLQUVsRDtJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UsIEJyb3dzZXJDb250ZXh0IH0gZnJvbSAncGxheXdyaWdodCc7XG5pbXBvcnQgeyBsb2dpbkFQSSB9IGZyb20gJy4uL2FwaS9hcGlfaGVscGVycyc7XG5pbXBvcnQgUGxheXdyaWdodFdyYXBwZXIgZnJvbSBcIi4uL2hlbHBlci93cmFwcGVyL1BsYXl3cmlnaHRXcmFwcGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblBhZ2Uge1xuICAgIHByaXZhdGUgYmFzZTogUGxheXdyaWdodFdyYXBwZXI7XG4gICAgcHJpdmF0ZSBjb250ZXh0OiBCcm93c2VyQ29udGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgY29udGV4dDogQnJvd3NlckNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5iYXNlID0gbmV3IFBsYXl3cmlnaHRXcmFwcGVyKHBhZ2UpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBBc3NpZ24gY29udGV4dCB0byBjbGFzcyBwcm9wZXJ0eVxuICAgIH1cblxuICAgIHByaXZhdGUgRWxlbWVudHMgPSB7XG4gICAgICAgIGRhc2hib2FyZExhYmVsOiBcIi8vYVtjb250YWlucyh0ZXh0KCksJ0Rhc2hib2FyZCcpXVwiLFxuICAgIH1cblxuICAgIGFzeW5jIGxvZ2luQW5kUmVkaXJlY3RUb0Rhc2hib2FyZCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGxvZ2luQVBJKHVzZXJuYW1lLCBwYXNzd29yZCk7XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgYXV0aGVudGljYXRpb24gdG9rZW4gYXMgYSBjb29raWVcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY29udGV4dC5hZGRDb29raWVzKFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2F1dGhfdG9rZW4nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0b2tlbixcbiAgICAgICAgICAgICAgICBzZWN1cmU6IHRydWUsXG4gICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgc2FtZVNpdGU6ICdTdHJpY3QnLFxuICAgICAgICAgICAgICAgIGRvbWFpbjogJ2FwbXRlc3QuaW50ZXJmYWNlc3lzLmNvbScsIFxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICAvLyBEaXJlY3RseSBuYXZpZ2F0ZSB0byB0aGUgZGFzaGJvYXJkIGFmdGVyIGxvZ2luXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBhZ2UuZ290byhcImh0dHBzOi8vYXBtdGVzdC5pbnRlcmZhY2VzeXMuY29tLyMvbmF2L2Rhc2hib2FyZFwiKTtcblxuICAgICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIGRhc2hib2FyZCBsYWJlbCB0byBlbnN1cmUgcmVkaXJlY3Rpb25cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGFnZS53YWl0Rm9yU2VsZWN0b3IodGhpcy5FbGVtZW50cy5kYXNoYm9hcmRMYWJlbCk7IC8vIEFzc3VtaW5nIEVsZW1lbnRzLmRhc2hib2FyZExhYmVsIGlzIGEgdmFsaWQgbG9jYXRvclxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZGlyZWN0ZWQgdG8gZGFzaGJvYXJkXCIpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQ6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==