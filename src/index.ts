import './polyfill'

import bg from "./services/manager/bg";
import screen from "./services/manager/screen";
import platform from "./utils/platform";
import runtime from "./utils/runtime";
import rank from './services/rank';
import app from './services/app';
import ad from './services/ad';

import navigator from "./services/navigator/stack";
import popup from "./services/display/popupmanager";
import toast from "./services/display/toastmanager";

import Activity from "./services/display/activity";
import PopupView from "./services/display/popupview";
import ToastView from "./services/display/toastview";

import { init, init3D, start, exit } from './services/init';

const Tape = {
    init,
    init3D,
    start,
    exit,

    bg,
    screen,
    platform,
    ad,
    rank,
    app,
    navigator,
    popup,
    toast,

    Activity,
    PopupView,
    ToastView,
}

if (typeof window !== "undefined") {
    (window as any).Tape = Tape;
    (window as any).runtime = runtime;
}

export = {
    Tape,
    runtime
};
