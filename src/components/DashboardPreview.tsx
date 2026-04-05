import { ChevronDown, Search, Bell, Plus, MoreHorizontal, Home, ListTodo, ArrowLeftRight, CreditCard, Landmark, Building2, Route, BellRing, Settings, Send, Download, Upload, Wallet, Receipt, FileText, CheckCircle2 } from "lucide-react";

const DashboardPreview = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div
        className="rounded-2xl overflow-hidden p-3 md:p-4"
        style={{
          background: "rgba(255, 255, 255, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "var(--shadow-dashboard)",
        }}
      >
        <div className="rounded-xl bg-background text-foreground text-[11px] select-none pointer-events-none overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-foreground flex items-center justify-center text-background text-[10px] font-semibold">N</div>
              <span className="font-semibold text-xs">Nexora</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </div>
            <div className="hidden md:flex items-center gap-1.5 bg-secondary rounded-md px-2.5 py-1 text-muted-foreground flex-1 max-w-[220px] mx-4">
              <Search className="h-3 w-3" />
              <span className="flex-1">Search...</span>
              <span className="text-[9px] bg-background rounded px-1 py-0.5">⌘K</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden md:inline text-[10px] font-medium text-foreground">Move Money</span>
              <Bell className="h-3.5 w-3.5 text-muted-foreground" />
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-[9px] font-semibold">JB</div>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="hidden md:block w-40 border-r border-border py-2 px-2 shrink-0">
              <div className="space-y-0.5">
                <SidebarItem icon={Home} label="Home" active />
                <SidebarItem icon={ListTodo} label="Tasks" badge="10" />
                <SidebarItem icon={ArrowLeftRight} label="Transactions" />
                <SidebarItem icon={CreditCard} label="Payments" chevron />
                <SidebarItem icon={CreditCard} label="Cards" />
                <SidebarItem icon={Landmark} label="Capital" />
                <SidebarItem icon={Building2} label="Accounts" chevron />
              </div>
              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider px-2 mb-1.5">Workflows</p>
                <div className="space-y-0.5">
                  <SidebarItem icon={Route} label="Trade Rules" />
                  <SidebarItem icon={CreditCard} label="Payments" />
                  <SidebarItem icon={BellRing} label="Notifications" />
                  <SidebarItem icon={Settings} label="Settings" />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-3 bg-secondary/30 min-w-0">
              <p className="text-sm font-semibold text-foreground mb-2">Welcome, Jane</p>

              {/* Action buttons */}
              <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                <ActionPill label="Send" icon={Send} primary />
                <ActionPill label="Request" icon={Download} />
                <ActionPill label="Transfer" icon={ArrowLeftRight} />
                <ActionPill label="Deposit" icon={Upload} />
                <ActionPill label="Pay Bill" icon={Wallet} />
                <ActionPill label="Create Invoice" icon={FileText} />
                <span className="text-[9px] text-muted-foreground ml-1">Customize</span>
              </div>

              {/* Cards row */}
              <div className="flex gap-2 mb-2">
                {/* Balance Card */}
                <div className="flex-1 basis-0 bg-background rounded-lg p-3 border border-border">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[10px] text-muted-foreground">Mercury Balance</span>
                    <CheckCircle2 className="h-2.5 w-2.5 text-accent" />
                  </div>
                  <p className="text-lg font-semibold text-foreground leading-tight">
                    $8,450,190<span className="text-xs text-muted-foreground">.32</span>
                  </p>
                  <div className="flex items-center gap-3 mt-1 text-[9px]">
                    <span className="text-muted-foreground">Last 30 Days</span>
                    <span className="text-green-600">+$1.8M</span>
                    <span className="text-red-500">-$900K</span>
                  </div>
                  {/* SVG Chart */}
                  <svg className="w-full h-20 mt-2" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,60 C30,55 60,40 90,35 C120,30 150,50 180,25 C210,0 240,15 270,10 C285,8 300,12 300,12 L300,80 L0,80 Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      d="M0,60 C30,55 60,40 90,35 C120,30 150,50 180,25 C210,0 240,15 270,10 C285,8 300,12 300,12"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                {/* Accounts Card */}
                <div className="flex-1 basis-0 bg-background rounded-lg p-3 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-foreground">Accounts</span>
                    <div className="flex items-center gap-1">
                      <Plus className="h-3 w-3 text-muted-foreground" />
                      <MoreHorizontal className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </div>
                  <AccountRow name="Credit" amount="$98,125.50" />
                  <AccountRow name="Treasury" amount="$6,750,200.00" />
                  <AccountRow name="Operations" amount="$1,592,864.82" />
                </div>
              </div>

              {/* Transactions Table */}
              <div className="bg-background rounded-lg p-3 border border-border">
                <p className="text-[10px] font-medium text-foreground mb-2">Recent Transactions</p>
                <table className="w-full text-[10px]">
                  <thead>
                    <tr className="text-muted-foreground text-left">
                      <th className="pb-1.5 font-medium">Date</th>
                      <th className="pb-1.5 font-medium">Description</th>
                      <th className="pb-1.5 font-medium text-right">Amount</th>
                      <th className="pb-1.5 font-medium text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground">
                    <TxRow date="Mar 15" desc="AWS" amount="-$5,200" status="Pending" statusColor="text-amber-500" />
                    <TxRow date="Mar 14" desc="Client Payment" amount="+$125,000" status="Completed" statusColor="text-green-600" />
                    <TxRow date="Mar 13" desc="Payroll" amount="-$85,450" status="Completed" statusColor="text-green-600" />
                    <TxRow date="Mar 12" desc="Office Supplies" amount="-$1,200" status="Completed" statusColor="text-green-600" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label, active, badge, chevron }: { icon: any; label: string; active?: boolean; badge?: string; chevron?: boolean }) => (
  <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] ${active ? "bg-secondary font-medium text-foreground" : "text-muted-foreground"}`}>
    <Icon className="h-3.5 w-3.5 shrink-0" />
    <span className="flex-1">{label}</span>
    {badge && <span className="bg-accent text-accent-foreground text-[8px] rounded-full px-1.5 py-0.5 font-medium">{badge}</span>}
    {chevron && <ChevronDown className="h-2.5 w-2.5" />}
  </div>
);

const ActionPill = ({ label, icon: Icon, primary }: { label: string; icon: any; primary?: boolean }) => (
  <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium ${primary ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}>
    <Icon className="h-2.5 w-2.5" />
    {label}
  </div>
);

const AccountRow = ({ name, amount }: { name: string; amount: string }) => (
  <div className="flex items-center justify-between py-3 text-xs">
    <span className="text-muted-foreground">{name}</span>
    <span className="font-medium text-foreground">{amount}</span>
  </div>
);

const TxRow = ({ date, desc, amount, status, statusColor }: { date: string; desc: string; amount: string; status: string; statusColor: string }) => (
  <tr>
    <td className="py-1.5 text-muted-foreground">{date}</td>
    <td className="py-1.5">{desc}</td>
    <td className="py-1.5 text-right font-medium">{amount}</td>
    <td className={`py-1.5 text-right ${statusColor}`}>{status}</td>
  </tr>
);

export default DashboardPreview;
