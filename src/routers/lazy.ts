import { lazy } from "react";

// auth
export const PageLogin = lazy(() => import("@/pages/login"));
export const PageRegister = lazy(() => import("@/pages/register"));

// page
export const PageHome = lazy(() => import("@/pages/home"));
export const PageManagerBook = lazy(() => import("@/pages/manager_book"));
export const PageOrder = lazy(() => import("@/pages/manager_user"));
export const PageReview = lazy(() => import("@/pages/review"));

export const PageManagerPermisson = lazy(() => import("@/pages/manager_permission"));
export const PageManagerUser = lazy(() => import("@/pages/manager_user"));
export const PageManagerCategory = lazy(() => import("@/pages/manager_category"));
export const PageManagerOrder = lazy(() => import("@/pages/manager_order"));
export const PageManagerPublisher = lazy(() => import("@/pages/manager_publisher"));

// other
export const PageNotFound = lazy(() => import("@/pages/not_found"));