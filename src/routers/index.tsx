import React, { useEffect } from "react";
import AppshellLayout from "@/layouts/appShell";
import ProtectedLayout from "@/layouts/protected";

import { Routes, Route } from "react-router-dom";
import {
    PageHome,
    PageLogin,
    PageManagerBook,
    PageManagerCategory,
    PageManagerOrder,
    PageManagerPermisson,
    PageManagerPublisher,
    PageManagerUser,
    PageNotFound,
    PageOrder,
    PageRegister,
    PageReview,
} from "./lazy";
import { ROUTER } from "@/constants/router";
import { useAppSelector } from "@/redux/hook";
import { useRefreshTokenMutation } from "@/redux/api/auth";
import { LoadingOverlay } from "@mantine/core";



const AppRouter: React.FC = () => {
    const role = useAppSelector(state => state.authSlice.role);

    const [refresh, { isLoading }] = useRefreshTokenMutation();
    
    useEffect(() => {
        refresh(null);
    }, []);

    if(isLoading) {
        return <LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />
    }

    return (
        <Routes>
            <Route path={ROUTER.LOGIN.href} element={<PageLogin />} />
            <Route path={ROUTER.REGSITER.href} element={<PageRegister />} />

            <Route element={<ProtectedLayout />}>
                <Route element={<AppshellLayout />}>
                    <Route path={ROUTER.HOME.href} element={<PageHome />} />
                    <Route path={ROUTER.ORDER.href} element={<PageOrder />} />
                    <Route path={ROUTER.REVIEW.href} element={<PageReview />} />

                    <Route path={ROUTER.MANAGER_BOOK.href} element={<PageManagerBook />} />
                    <Route path={ROUTER.MANAGER_PERMISSION.href} element={<PageManagerPermisson />} />
                    <Route path={ROUTER.MANAGER_USER.href} element={<PageManagerUser />} />
                    <Route path={ROUTER.MANAGER_CATEGORY.href} element={<PageManagerCategory />} />
                    <Route path={ROUTER.MANAGER_ORDER.href} element={<PageManagerOrder />} />
                    <Route path={ROUTER.MANAGER_PUBLISHER.href} element={<PageManagerPublisher />} />

                    {
                        role === "admin" &&
                        <>
                            {/* <Route path={ROUTER.DEPARTMENT.href} element={<PageDepartment />} />
                            <Route path={ROUTER.SCHEDULE.href} element={<PageSchedule />} />
                            <Route path={`${ROUTER.SCHEDULE.href}/:id`} element={<PageScheduleDetail />} />
                            <Route path={ROUTER.ROOM_CLIN.href} element={<PageRoomClin />} />
                            <Route path={ROUTER.ROOM_SPEC.href} element={<PageRoomSpec />} />
                            <Route path={ROUTER.FIELD.href} element={<PageField />} />
                            <Route path={ROUTER.FIELD_DETAIL.href} element={<PageFieldDetail />} />
                            <Route path={ROUTER.ACCOUNT_DOCTOR.href} element={<PageAccountDoctor />} />
                            <Route path={ROUTER.LOG_CHECK.href} element={<PageLogCheck />} /> */}
                        </>
                    }

                </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRouter;