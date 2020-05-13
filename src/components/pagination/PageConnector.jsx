import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loadData, updateData, setPageSize } from "../store/ActionCreators";

const filterType = (container, s) => {
  if (s !== "all") {
    return container.filter((i) => i.status.toLowerCase() === s).length;
  }
};

const mapStateToProps = (appState) => appState;

const mapDispatchToProps = { loadData, updateData, setPageSize };

const mergeProps = (appState, actionCreators, router) => ({
  ...appState,
  ...actionCreators,
  ...router,
  currentPage: Number(router.location.pathname.split("/").splice(-1)[0]),
  pageCount: () => {
    const ro = router.location.pathname.split("/");
    const status = ro[ro.length - 2];
    const pagetype = ro[2];

    if (pagetype === "payments") {
      if (status === "all") {
        return Math.ceil(
          (appState.payments_total | appState.pageSize || 5) /
            (appState.pageSize || 5)
        );
      } else {
        const ai = filterType(appState.payments, status);
        return Math.ceil(
          (ai | appState.pageSize || 5) / (appState.pageSize || 5)
        );
      }
    }
    if (pagetype === "orders") {
      if (status === "all") {
        return Math.ceil(
          (appState.orders_total | appState.pageSize || 5) /
            (appState.pageSize || 5)
        );
      } else {
        const ai = filterType(appState.orders, status);
        return Math.ceil(
          (ai | appState.pageSize || 5) / (appState.pageSize || 5)
        );
      }
    }
  },
  navigateToPage: (page) => {
    appState.pageon = page;
    const ro = router.location.pathname.split("/");
    const status = ro[ro.length - 2];
    const pageType = ro[2];
    if (pageType === "payments") {
      router.history.push(`/merchant/payments/${status}/${page}`);
    }
    if (pageType === "orders") {
      router.history.push(`/merchant/orders/${status}/${page}`);
    }
  },
});

export const PageConnector = (PageComponent) =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent)
  );
