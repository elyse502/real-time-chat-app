import { type RoomSummary } from "../types/chat.types";

interface RoomListProps {
  rooms: RoomSummary[];
  currentRoom: string;
  onJoinRoom: (room: string) => void;
}

const RoomList = ({ rooms, currentRoom, onJoinRoom }: RoomListProps) => {
  return (
    <aside className="w-full md:w-72 bg-slate-900 border-r border-slate-800 p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Chat Rooms</h2>

        <p className="text-sm text-slate-400 mt-1">Join a conversation</p>
      </div>

      <div className="space-y-3">
        {rooms.map((room) => {
          const isActive = currentRoom === room.name;

          return (
            <button
              key={room.name}
              onClick={() => onJoinRoom(room.name)}
              className={`w-full text-left rounded-lg p-4 transition cursor-pointer ${
                isActive ? "bg-blue-600" : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{room.name}</span>

                <span className="text-sm bg-slate-950 px-2 py-1 rounded">
                  {room.usersCount}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default RoomList;
