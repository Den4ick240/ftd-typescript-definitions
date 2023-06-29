/// <reference path="types/index.d.ts"/>

import { IAi } from "./types/ai";
import { IComponents } from "./types/components";
import { IDebug } from "./types/debug";
import { IFleet } from "./types/fleet";
import { IFriendly } from "./types/friendly";
import { IGuidance } from "./types/guidance";
import { IMisc } from "./types/misc";
import { IPropulsion } from "./types/propulsion";
import { IResources } from "./types/resources";
import { ISelf } from "./types/self";
import { ISpinner } from "./types/spinner";
import { ISubconstructs } from "./types/subconstructs";
import { ITarget } from "./types/target";
import { IWarning } from "./types/warning";
import { IWeapons } from "./types/weapons";

export * from "./enums/ai";
export * from "./enums/propulsion";
export * from "./enums/components";
export * from "./enums/weapons";

export { BlockInfo } from "./types/components";
export { FleetInfo } from "./types/fleet";
export { FriendlyInfo } from "./types/friendly";
export { ResourceInfo, ResourceZoneInfo } from "./types/resources";
export { TargetInfo, TargetPositionInfo } from "./types/target";
export { MissileWarningInfo } from "./types/warning";
export { WeaponInfo, WeaponConstraints } from "./types/weapons";

export interface I extends IAi, IComponents, IDebug, IFleet, IFriendly, IGuidance, IMisc, IPropulsion, IResources, ISelf, ISpinner, ISubconstructs, ITarget, IWarning, IWeapons {}